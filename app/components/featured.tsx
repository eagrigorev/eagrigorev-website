import fs from 'fs';
import Image from 'next/image';

const Featured = () => {
  const featuredImages = fs
    .readdirSync('public/images/featured/')
    .map((image) => `/../public/images/featured/${image}`);
  return (
    <main>
      <section>
        <header>
          <h1>
            Instead of tightening our grip by loading up on breakpoints, we can
            let go, embracing the ebb and flow with a more fluid and systematic
            approach.
          </h1>
        </header>
        <div>
          {featuredImages.map((image) => (
            <Image src={image} alt="" width={360} height={360} key="image" />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Featured;
