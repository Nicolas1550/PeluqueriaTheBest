import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectCartItems,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "@/redux/features/cart/cartSlice";
import CheckoutModal from "../checkoutModal/checkoutModal";
import { showAuthModal } from "@/redux/features/ui/uiSlice";
import { selectIsAuthenticated } from "@/redux/authSelectors";
import { RootState } from "@/redux/store";
import {
  CartContainer,
  CartHeader,
  CartItem,
  CartItemsList,
  CartTitle,
  CloseButton,
  ItemControls,
  ItemDetails,
  ItemImage,
  ItemName,
  ItemPrice,
  QuantityButton,
  RemoveButton,
  CheckoutButton,
} from "./cartStyles";

const Cart: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isAuthModalVisible = useAppSelector(
    (state: RootState) => state.ui.isAuthModalVisible
  );
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Cerrar el modal del carrito si se abre el modal de autenticación
  useEffect(() => {
    if (isAuthModalVisible && isOpen) {
      onClose(); // Cerrar el modal del carrito
    }
  }, [isAuthModalVisible, isOpen, onClose]);

  // Actualiza el estado de checkout basado en autenticación
  useEffect(() => {
    if (!isAuthenticated && isCheckoutOpen) {
      dispatch(showAuthModal("login"));
      setIsCheckoutOpen(false);
    }
  }, [isAuthenticated, isCheckoutOpen, dispatch]);

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    if (isAuthenticated) {
      setIsCheckoutOpen(true);
    } else {
      dispatch(showAuthModal("login"));
    }
  };

  // Calcular el total del carrito
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * parseFloat(item.price.toString());
  }, 0);

  return (
    <>
      <CartContainer isOpen={isOpen}>
        <CartHeader>
          <CartTitle>Carrito de Compras</CartTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </CartHeader>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <CartItemsList>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemImage
                  src={`http://localhost:3001/uploads/images/${item.imageFileName}`}
                  alt={item.name}
                />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>
                    {item.quantity} x $
                    {parseFloat(item.price.toString()).toFixed(2)} = $
                    {(item.quantity * parseFloat(item.price.toString())).toFixed(2)}
                  </ItemPrice>
                  <ItemControls>
                    <QuantityButton onClick={() => handleIncrement(item.id)}>
                      +
                    </QuantityButton>
                    <QuantityButton onClick={() => handleDecrement(item.id)}>
                      -
                    </QuantityButton>
                    <RemoveButton onClick={() => handleRemove(item.id)}>
                      Eliminar
                    </RemoveButton>
                  </ItemControls>
                </ItemDetails>
              </CartItem>
            ))}
          </CartItemsList>
        )}
        {cartItems.length > 0 && (
          <>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <CheckoutButton onClick={handleCheckout}>Comprar</CheckoutButton>
          </>
        )}
      </CartContainer>

      {/* Modal de Checkout */}
      <CheckoutModal
        open={isCheckoutOpen && isAuthenticated}
        onClose={() => {
          setIsCheckoutOpen(false);
          dispatch(clearCart()); // Limpiar carrito tras cerrar checkout manualmente
          onClose();
        }}
      />
    </>
  );
};

export default Cart;
