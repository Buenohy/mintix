import Tags from "./Tags";

export default function CardGameTags() {
  return (
    <div className="border-primary-border w-full rounded-lg border">
      <div className="flex flex-col gap-3 px-6 py-5">
        <div>
          <span className="text-gray-mintix text-xs font-normal">Tags</span>
        </div>
        <div className="flex gap-2">
          <Tags title="Fire Works" subtitle="(2)" />
          <Tags title="High Spender" />
          <Tags title="Music Lover" />
          <Tags title="Loyal" />
          <Tags title="VIP" />
          <Tags title="Sports" />
          <Tags title="Frequent Buyer" />
          <Tags title="Phone virified" />
          <Tags title="Promo Code" />
        </div>
      </div>
    </div>
  );
}
