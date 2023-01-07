import { useState } from "react";
import { useForm } from "react-hook-form";

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

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    reset();
  };

  const [value, setValue] = useState("");

  const inputHandler = (value: string) => {
    if (value.length === 3) {
      setValue(`${value.slice(0, 2)}/${value.slice(2)}`);
    } else {
      setValue(value);
    }
  };

  return (
    <div>
      <form
        className={`payment ${props.paymentVisible ? "visible" : ""}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="payment_title">Personal details</h3>
        <input
          {...register("paymentName", {
            pattern: /[a-zA-ZА-Яа-я]{3,}.[a-zA-ZА-Яа-я]{3,}/,
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
          pattern="[0-9]{3}"
          className="payment_phone"
          type="tel"
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
              /[a-zA-Z0-9А-Яа-я]{5,}.[a-zA-Z0-9А-Яа-я]{5,}.[a-zA-Z0-9А-Яа-я]{5,}/,
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
        <div className="payment_card">
          <input
            {...register("paymentCardNumber", {
              pattern: /^[0-9]{16}$/,
              required: true,
            })}
            className="card_number"
            type="number"
            placeholder="Card number"
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
                fourDigits: (v: string) => v.length === 5,
                month: (v: { slice: (arg0: number, arg1: number) => number }) =>
                  Number(v.slice(0, 2)) <= 12,
              },
              required: true,
            })}
            className="card_valid"
            type="text"
            placeholder="Valid thru"
            value={value}
            maxLength={5}
            onChange={(evt) => inputHandler(evt.target.value)}
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
        className={`shadow ${props.paymentVisible ? "visible" : ""}`}
        onClick={(evt) => {
          props.setPaymentVisible(() => false);
        }}
      ></div>
    </div>
  );
};

export default Payment;
