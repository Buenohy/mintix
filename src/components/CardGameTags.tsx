import Tags from "./Tags";

export default function CardGameTags() {
  return (
    <div className="border-primary-border w-full rounded-lg border">
      <div className="flex flex-col gap-3 px-6 py-5">
        <div>
          <span className="text-gray-mintix text-xs font-normal">Tags</span>
        </div>
        <div className="flex gap-2">
          <Tags title="Fire Works" subtitle="(2)" variant="red" />
          <Tags title="High Spender" variant="green" />
          <Tags title="Music Lover" variant="purple" />
          <Tags title="Loyal" variant="orange" />
          <Tags title="VIP" variant="teal" />
          <Tags title="Sports" variant="blue" />
          <Tags title="Frequent Buyer" variant="yellow" />
          <Tags title="Phone virified" variant="forest" />
          <Tags title="Promo Code" variant="pink" />
        </div>
      </div>
    </div>
  );
}
