import { Deal } from "./components/deal/deal";
import styles from "./deals.module.css";
import { useSelector, useDispatch } from "react-redux";
import { IRootState, AppDispatch } from "../../store/store";
import { getDeals } from "../../store/deals/actions";
import { useEffect } from "react";
import { Loader } from "../components";

const Deals: React.FC = () => {
  const { deals, isLoading } = useSelector((state: IRootState) => state.deals);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeals());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <section className={styles.deals} id="deals">
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
