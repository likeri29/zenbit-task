import styles from "./deal.module.css";

type DealProps = {
  name: string;
  price: number;
  yieldValue: string;
  sold: number;
  ticket_price: number;
  days_left: number;
  image: string;
};

const Deal: React.FC<DealProps> = ({
  name,
  price,
  yieldValue,
  sold,
  ticket_price: ticketPrice,
  days_left: daysLeft,
  image,
}) => {
  const dealStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className={styles.deal} style={dealStyle}>
      <h3>{name}</h3>
      <div className={styles.dealProperties}>
        <p>{price} Dhs</p>
        <p>Yield {yieldValue}</p>
        <p>Sold {sold}%</p>
        <p>Ticket - {ticketPrice} Dhs</p>
        <p>Days left {daysLeft}</p>
      </div>
    </div>
  );
};

export { Deal };
