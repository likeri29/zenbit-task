import { Deal } from "./components/deal/deal";
import styles from "./deals.module.css";

const deals = [
  {
    id: 1,
    name: "The Marina Torch",
    price: 6500000,
    yield: "9.25%",
    sold: 75,
    ticket_price: 60000,
    days_left: 150,
    image:
      "https://res.cloudinary.com/dceoo0wkh/image/upload/v1713352638/zenbit/Rectangle_274_iagsd3.png",
  },
  {
    id: 2,
    name: "HHHR Tower",
    price: 6500000,
    yield: "9.25%",
    sold: 75,
    ticket_price: 60000,
    days_left: 150,
    image:
      "https://res.cloudinary.com/dceoo0wkh/image/upload/v1713352636/zenbit/Rectangle_274_1_wto8e0.png",
  },
  {
    id: 3,
    name: "Ocean peaks",
    price: 6500000,
    yield: "9.25%",
    sold: 75,
    ticket_price: 60000,
    days_left: 150,
    image:
      "https://res.cloudinary.com/dceoo0wkh/image/upload/v1713352630/zenbit/Rectangle_274_3_aqa0mm.png",
  },
  {
    id: 4,
    name: "Al Yaqoub Tower",
    price: 6500000,
    yield: "9.25%",
    sold: 75,
    ticket_price: 60000,
    days_left: 150,
    image:
      "https://res.cloudinary.com/dceoo0wkh/image/upload/v1713352633/zenbit/Rectangle_274_2_eav0xq.png",
  },
];

const Deals: React.FC = () => {
  return (
    <section className={styles.deals}>
      <h2 className={styles.dealsHeader}>Open Deals</h2>
      <div className={styles.dealsContainer}>
        {deals.map((deal) => (
          <Deal
            key={deal.id}
            name={deal.name}
            ticket_price={deal.ticket_price}
            price={deal.price}
            image={deal.image}
            yieldValue={deal.yield}
            sold={deal.sold}
            days_left={deal.days_left}
          />
        ))}
      </div>
    </section>
  );
};

export { Deals };
