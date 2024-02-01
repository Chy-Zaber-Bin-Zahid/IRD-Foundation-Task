import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const icons = [
    "home 1",
    "54-menu-2",
    "memorize 1",
    "3-keep-minus",
    "ruqyah 1",
    "dua-info 1",
    "books 1",
  ];

  return (
    <div className="border overflow-y-auto flex flex-col justify-between items-center py-4 rounded-3xl bg-white gap-12 mb-4">
      <Image
        className="cursor-pointer"
        src="/logoPrayingHand.png"
        alt="praying logo"
        width={73}
        height={73}
      />
      <div className="flex flex-col gap-6">
        {icons.map((each) => (
          <Link
            href="/"
            key={each}
            className="bg-iconColor rounded-full p-2 cursor-pointer hover:scale-105 "
          >
            <Image src={`/${each}.png`} alt={each} width={20} height={20} />
          </Link>
        ))}
      </div>
      <Image
        className="cursor-pointer"
        src="/logoSupport.png"
        alt="support logo"
        width={67}
        height={66}
      />
    </div>
  );
}

export default Navbar;
