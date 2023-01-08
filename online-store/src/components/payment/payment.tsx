import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Payment = (props: {
  paymentVisible: boolean;
  setPaymentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const { setCartList } = useCart();

  const onSubmit = (data: any) => {
    setCartList([]);
    reset();
    setNotificationState(true);
    setTimeout(() => {
      props.setPaymentVisible(false);
      navigate("/");
      setNotificationState(false);
    }, 3000);
  };

  const [cardValidValue, setValidValue] = useState("");

  const inputHandler = (value: string) => {
    const delSeparator = value.replace(/\//g, "");
    if (delSeparator.length < 2) {
      setValidValue(delSeparator);
    } else if (delSeparator.length === 2 && value.slice(-1) !== "/") {
      setValidValue(`${delSeparator}`);
    } else {
      setValidValue(`${delSeparator.slice(0, 2)}/${delSeparator.slice(2)}`);
    }
  };

  const [cardNumberValue, setNumberValue] = useState("");
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
              pattern: /^[a-zA-ZА-Яа-я]{3,} [a-zA-ZА-Яа-я]{3,}$/,
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
              pattern: /^\+\d{9}/,
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
              pattern:
                /^[a-zA-Z0-9А-Яа-я]{5,} [a-zA-Z0-9А-Яа-я]{5,} [a-zA-Z0-9А-Яа-я]{5,}/,
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
              cardNumberValue === "4"
                ? "visa"
                : cardNumberValue === "5"
                ? "master"
                : cardNumberValue === "6"
                ? "union"
                : ""
            }`}
          >
            <input
              {...register("paymentCardNumber", {
                pattern: /^[0-9]{16}$/,
                required: true,
              })}
              className="card_number"
              type="number"
              placeholder="Card number"
              onChange={(evt) => {
                setNumberValue((evt.target.value + "")[0]);
              }}
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
                  fourDigits: (v) => v.length === 5,
                  month: (v) => v.slice(0, 2) <= 12,
                },
                required: true,
              })}
              className="card_valid"
              type="text"
              placeholder="Valid thru"
              value={cardValidValue}
              onChange={(evt) => inputHandler(evt.target.value)}
              maxLength={5}
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
          <h3 className="notification_subtitle">
            Redirect to store after 3 seconds
          </h3>
        </div>
      </div>
      <div
        className={`shadow ${props.paymentVisible ? "visible" : ""}`}
        onClick={(evt) => {
          props.setPaymentVisible(() => false);
        }}
      ></div>
    </div>
  );
};

export default Payment;
