import Image from 'next/image'


export default function CardPortfolio({ srcImg, href }) {
  return (
    <div className='col-lg-4'>
      <a href={href} target="_blank">
        <Image className="rounded m-2 shadow" width={480} height={245} src={srcImg} />
      </a> 
    </div>
  );
}