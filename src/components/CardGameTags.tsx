import Tags from "./Tags";

export default function CardGameTags() {
  return (
    <div className="border-primary-border h-full w-full rounded-xl border bg-[#050810]/50">
      <div className="flex flex-col gap-3 px-6 py-5">
        <div>
          <span className="text-gray-mintix text-xs font-normal">Tags</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Tags title="Fire Works" subtitle="(2)" variant="red" />
          <Tags title="High Spender" variant="green" />
          <Tags title="Music Lover" variant="purple" />
          <Tags title="Loyal" variant="orange" />
          <Tags title="VIP" variant="teal" />
          <Tags title="Sports" variant="blue" />
          <Tags title="Frequent Buyer" variant="yellow" />
          <Tags title="Phone verified" variant="forest" />
          <Tags title="Promo Code" variant="pink" />
        </div>
      </div>
    </div>
  );
}
