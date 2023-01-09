import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Payment = (props: {
  paymentVisible: boolean;
  setPaymentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setCartList } = useCart();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = () => {
    setCartList([]);
    reset();
    setNotificationState(true);
    setCardNumberValue("");
    setValidValue("");
    setTimeout(() => {
      props.setPaymentVisible(false);
      navigate("/");
      setNotificationState(false);
    }, 3000);
  };

  const [cardNumberValue, setCardNumberValue] = useState("");

  const inputCardNumber = (value: string) => {
    const cardNumber = value.replace(/[^\d]/g, "").substring(0, 16);
    if (cardNumber) {
      const cardNumberSeparator = cardNumber.match(/.{1,4}/g);
      cardNumberSeparator && setCardNumberValue(cardNumberSeparator.join(" "));
    } else {
      setCardNumberValue(cardNumber);
    }
  };

  const [cardValidValue, setValidValue] = useState("");

  const inputCardValid = (value: string) => {
    const delSeparator = value.replace(/[^\d]/g, "").substring(0, 4);
    if (delSeparator) {
      const cardNumberSeparator = delSeparator.match(/.{1,2}/g);
      cardNumberSeparator && setValidValue(cardNumberSeparator.join(" / "));
    } else {
      setValidValue(delSeparator);
    }
  };

  const [notificationState, setNotificationState] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <div className={`payment-modal ${props.paymentVisible ? "visible" : ""}`}>
        <form
          className={`payment ${notificationState ? "hidden" : ""}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="payment_title">Personal details</h3>
          <input
            {...register("paymentName", {
              pattern: /^[^\s]{3,} [^\s]{3,}/,
              required: true,
            })}
            className="payment_name"
            type="text"
            placeholder="First and last name"
          />
          <div className="payment_error">
            <span className="error_description">
              2 words, each with at least 3 letters
            </span>
            {errors?.paymentName && <span>Error!</span>}
          </div>
          <input
            {...register("paymentPhone", {
              pattern: /^\+\d{9}\d+$/,
              required: true,
            })}
            className="payment_phone"
            type="text"
            placeholder="Phone number"
          />
          <div className="payment_error">
            <span className="error_description">
              number at least 9 digits starting with '+'
            </span>
            {errors?.paymentPhone && <span>Error!</span>}
          </div>
          <input
            {...register("paymentAddress", {
              pattern: /^[^\s]{5,} [^\s]{5,} [^\s]{5,}/,
              required: true,
            })}
            className="payment_address"
            type="text"
            placeholder="Delivery address"
          />
          <div className="payment_error">
            <span className="error_description">
              at least 3 words, each at least 5 characters
            </span>
            {errors?.paymentAddress && <span>Error!</span>}
          </div>
          <input
            {...register("paymentEmail", {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
              required: true,
            })}
            className="payment_email"
            type="email"
            placeholder="E-mail"
          />
          <div className="payment_error">
            <span className="error_description">e-mail address</span>
            {errors?.paymentEmail && <span>Error!</span>}
          </div>
          <h3 className="payment_title">Payment details</h3>
          <div
            className={`payment_card ${
              cardNumberValue[0] === "4"
                ? "visa"
                : cardNumberValue[0] === "5"
                ? "master"
                : cardNumberValue[0] === "6"
                ? "union"
                : ""
            }`}
          >
            <input
              {...register("paymentCardNumber", {
                pattern: /^\d{4} \d{4} \d{4} \d{4}$/,
                required: true,
              })}
              className="card_number"
              type="text"
              placeholder="Card number"
              value={cardNumberValue}
              onChange={(evt) => {
                inputCardNumber(evt.target.value);
              }}
              maxLength={19}
            />
            <div className="payment_error">
              <span className="error_description">
                card number strictly 16 digits
              </span>
              {errors?.paymentCardNumber && <span>Error!</span>}
            </div>
            <input
              {...register("paymentValid", {
                validate: {
                  fourDigits: (v) => v.length === 7,
                  month: (v) => v.slice(0, 2) <= 12,
                },
                required: true,
              })}
              className="card_valid"
              type="text"
              placeholder="Valid thru"
              value={cardValidValue}
              onChange={(evt) => inputCardValid(evt.target.value)}
              maxLength={7}
            />
            <div className="payment_error">
              <span className="error_description">
                4 digits for month and year
              </span>
              {errors?.paymentValid && <span>Error!</span>}
            </div>
            <input
              {...register("paymentCVV", {
                pattern: /^[0-9]{3}$/,
                required: true,
              })}
              className="card_cvv"
              type="number"
              placeholder="CVV code"
            />
            <div className="payment_error">
              <span className="error_description">3 digits</span>
              {errors?.paymentCVV && <span>Error!</span>}
            </div>
          </div>
          <input type="submit" className="payment_button" value="Confirm" />
        </form>
        <div
          className={`payment-notification ${
            notificationState ? "" : "hidden"
          }`}
        >
          <h2 className="notification_title">Thanks for your order!</h2>
          <span className="notice_image ">local_mall</span>
          <h3 className="notification_subtitle">
            Redirect to store after 3 seconds
          </h3>
        </div>
      </div>
      <div
        className={`shadow ${props.paymentVisible ? "visible" : ""}`}
        onClick={() => {
          props.setPaymentVisible(() => false);
        }}
      ></div>
    </div>
  );
};

export default Payment;
