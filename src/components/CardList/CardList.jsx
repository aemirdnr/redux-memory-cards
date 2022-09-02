import Card from "../Card/Card";

import { useSelector } from "react-redux";

function CardList() {
  const cards = useSelector((state) => state.cards.items);
  console.log(cards);
  return (
    <div className="row my-4 gap-4 justify-content-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          src={card.img}
          name={card.name}
          isOpen={card.isOpen}
        />
      ))}
    </div>
  );
}

export default CardList;
