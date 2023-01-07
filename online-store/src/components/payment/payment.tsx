const Payment = () => {
  return (
    <div className="shadow visible">
      <form className="payment visible">
        <h3 className="payment_title">Personal details</h3>
        <input
          className="payment_name"
          type="text"
          placeholder="First and last name"
          required
        />
        <input
          className="payment_phone"
          type="tel"
          placeholder="Phone number"
          required
        />
        <input
          className="payment_address"
          type="text"
          placeholder="Delivery address"
          required
        />
        <input
          className="payment_email"
          type="email"
          placeholder="E-mail"
          required
        />
        <h3 className="payment_title">Payment details</h3>
        <div className="payment_card">
          <input
            className="card_number"
            type="number"
            placeholder="Card number"
            required
          />
          <input
            className="card_valid"
            type="number"
            placeholder="Valid thru"
            required
          />
          <input
            className="card_cvv"
            type="number"
            placeholder="CVV code"
            required
          />
        </div>
        <input type="submit" className="payment_button" value="Confirm" />
      </form>
    </div>
  );
};

export default Payment;
