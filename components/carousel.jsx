import Link from 'next/link';

const carouselProducts = [
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9c_vabPS6NnrIGVoqFs-47G4dp33nPfVCyfYrKP6RY2QSIHT9gdNZjbz8wz8r5yX7oE&usqp=CAU'
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9c_vabPS6NnrIGVoqFs-47G4dp33nPfVCyfYrKP6RY2QSIHT9gdNZjbz8wz8r5yX7oE&usqp=CAU'
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9c_vabPS6NnrIGVoqFs-47G4dp33nPfVCyfYrKP6RY2QSIHT9gdNZjbz8wz8r5yX7oE&usqp=CAU'
    }
]

export default function Carousel() {

  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={i}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={'/'} className="relative h-full w-full">
              <img
                alt={'fav photos'}
                src={product.image}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}