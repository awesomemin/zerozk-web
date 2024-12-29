import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 px-5">
      <Image src={logo} alt="site logo" className="w-20" />
      <p className="text-sm">시청자가 없는 치지직 스트리머들</p>
    </header>
  );
}
