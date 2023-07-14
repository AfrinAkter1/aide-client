

const Banner = () => {
    return (
        <div className="mx-10 my-10">
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/organic-vegetables-carrots-potatoes-onions-wooden-table_899263-1655.jpg?size=626&ext=jpg&ga=GA1.1.977297310.1680196639&semt=sph" className="lg:w-[1445px] lg:h-[445px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle absolute right-14 -top-52">❮</a> 
      <a href="#slide2" className="btn btn-circle absolute  right-0 -top-52">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/dry-date-white-wooden-background-top-view-free-space-your-text_187166-23265.jpg?size=626&ext=jpg&ga=GA1.1.977297310.1680196639&semt=sph" className="lg:w-[1445px] lg:h-[445px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle absolute right-14 -top-52">❮</a> 
      <a href="#slide3" className="btn btn-circle absolute right-0 -top-52">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/fruits-vegetables-horizontal-composition_1284-29854.jpg?size=626&ext=jpg&ga=GA1.1.977297310.1680196639&semt=ais" className="lg:w-[1445px] lg:h-[445px]"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle absolute right-14 -top-52">❮</a> 
      <a href="#slide4" className="btn btn-circle absolute right-0 -top-52">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/composition-with-vegetables-fruits-wicker-basket-isolated_135427-239.jpg?size=626&ext=jpg&ga=GA1.1.977297310.1680196639&semt=sph"  className="lg:w-[1445px] lg:h-[445px]"   />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle absolute right-14 -top-52">❮</a> 
      <a href="#slide1" className="btn btn-circle absolute right-0 -top-52">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;