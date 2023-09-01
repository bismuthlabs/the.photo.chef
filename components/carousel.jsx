import Link from 'next/link';

const carouselImages = [
    {
        image: 'https://newsghana.com.gh/wp-content/uploads/2021/08/Nini-Amerlise.jpg'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwr51G-9JiygUsDk0ed_sLx39-zWpAbjNH2exZcb61dVz3caNaEwZNErPAHv-03RMy_M&usqp=CAU'
    },
    {
        image: 'https://ghanandwom.net/wp-content/uploads/2020/02/WhatsApp-Image-2020-02-17-at-3.57.14-PM-473x600.jpeg'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOU2X9fnh7ghFVkRQ_4_F4jYXhMu9AmBzMmxPSpxF9q03BmATHNf3LuTfUCRRGBeUvsiE&usqp=CAU'
    },
    {
        image: 'https://braperucci.africa/wp-content/uploads/2021/01/127986273_367793270986037_7421404619034010113_n-834x1024.jpg'
    },
    {
        image: 'https://i0.wp.com/www.ghanacelebrities.com/wp-content/uploads/2019/03/Ghana-e1551876356866.jpg?fit=700%2C875&ssl=1'
    }
]

export default function Carousel() {

  return (
    <div className=" w-full overflow-x-auto overflow-y-hidden pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselImages.map((product, i) => (
          <li
            key={i}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <div className="relative h-full w-full">
              <img
                alt={'fav photos'}
                src={product.image}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}