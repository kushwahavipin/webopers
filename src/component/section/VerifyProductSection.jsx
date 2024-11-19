import React from 'react';
import ProductCard from '../card/VerifyProductCard'; // Import ProductCard component

const VerifyProductSection = () => {
  // Sample product data
  const products = [
    {
      image: "https://s3-alpha-sig.figma.com/img/1fd8/af94/db961e92edde8f8b0ec5a208bbf6c9ac?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W08JeIB1KcppXGQzqemtD1c25vMlc6BASkuRROzUFF2CCGQD4zQ83JhhoG9X-0C2mkoVQF7qdWgLM8YOlVnCUGp2A~NuAueMLqvHY7FJz3xgQQonJuEn4UnAKE3XrAFXJ~~EKoVp2EjJu~XuErSsC0LyGtYW9Fo-mJkn33rXi2JNGjbjTeNaCF3XlvYpoGPyTtuuwzjhFwlAKt1c7FDUhpxQUdza9m~yOuNaq1R8mZp-XNqS-xHtCOrItGWrzDuFX3OUOxS0GMIkrFVIXR1KO5mFZQb~NyxWC~YloVTAv3M6ki70J0LyQeTpmP4tc-nOWExknDbP9-7jWBxyJkRWrQ__",
      title: "Showpiece",
      originalPrice: "895",
      discountedPrice: "499",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/cced/275e/1eb4796d139e2e08fc0a86165fc58161?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE54KcXfq-pGLUL8q1qO-f3pwpKXYWSDPx9zxtBEomXyCLtLsDsMZdDPZCA~gg8~QZva-FlZm7GrT~XWzDAp11f1B7uUEyu2pS~9uyf-ahYNLoeotpvdRcnB0CqqaMFuPIlBMSy8xUEOJ5oxbULj9Rjcx~k3dBw6H72KsBJU267sgJNS69i3iwWvU2lNd97oRdHlZXwRLXS5li9E47ouTVxBHE-dPFFVVoeV0sNvAM7G~415RZGwe2HbtCBZD9e9fEHd8tEyt8lNv~apkeN~Gv8YoNshkNFVzORCq6wUJrCiLCnZ9jEvzAkY-QMrTwWE8GY~0FbFXpPXUifyLeWmvA__",
      title: "Apple Sarees",
      originalPrice: "1599",
      discountedPrice: "960",
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/cced/275e/1eb4796d139e2e08fc0a86165fc58161?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE54KcXfq-pGLUL8q1qO-f3pwpKXYWSDPx9zxtBEomXyCLtLsDsMZdDPZCA~gg8~QZva-FlZm7GrT~XWzDAp11f1B7uUEyu2pS~9uyf-ahYNLoeotpvdRcnB0CqqaMFuPIlBMSy8xUEOJ5oxbULj9Rjcx~k3dBw6H72KsBJU267sgJNS69i3iwWvU2lNd97oRdHlZXwRLXS5li9E47ouTVxBHE-dPFFVVoeV0sNvAM7G~415RZGwe2HbtCBZD9e9fEHd8tEyt8lNv~apkeN~Gv8YoNshkNFVzORCq6wUJrCiLCnZ9jEvzAkY-QMrTwWE8GY~0FbFXpPXUifyLeWmvA__",
        title: "Apple Sarees",
        originalPrice: "1599",
        discountedPrice: "960",
      },
      {
        image: "https://s3-alpha-sig.figma.com/img/cced/275e/1eb4796d139e2e08fc0a86165fc58161?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE54KcXfq-pGLUL8q1qO-f3pwpKXYWSDPx9zxtBEomXyCLtLsDsMZdDPZCA~gg8~QZva-FlZm7GrT~XWzDAp11f1B7uUEyu2pS~9uyf-ahYNLoeotpvdRcnB0CqqaMFuPIlBMSy8xUEOJ5oxbULj9Rjcx~k3dBw6H72KsBJU267sgJNS69i3iwWvU2lNd97oRdHlZXwRLXS5li9E47ouTVxBHE-dPFFVVoeV0sNvAM7G~415RZGwe2HbtCBZD9e9fEHd8tEyt8lNv~apkeN~Gv8YoNshkNFVzORCq6wUJrCiLCnZ9jEvzAkY-QMrTwWE8GY~0FbFXpPXUifyLeWmvA__",
        title: "Apple Sarees",
        originalPrice: "1599",
        discountedPrice: "960",
      },
      {
        image: "https://s3-alpha-sig.figma.com/img/cced/275e/1eb4796d139e2e08fc0a86165fc58161?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE54KcXfq-pGLUL8q1qO-f3pwpKXYWSDPx9zxtBEomXyCLtLsDsMZdDPZCA~gg8~QZva-FlZm7GrT~XWzDAp11f1B7uUEyu2pS~9uyf-ahYNLoeotpvdRcnB0CqqaMFuPIlBMSy8xUEOJ5oxbULj9Rjcx~k3dBw6H72KsBJU267sgJNS69i3iwWvU2lNd97oRdHlZXwRLXS5li9E47ouTVxBHE-dPFFVVoeV0sNvAM7G~415RZGwe2HbtCBZD9e9fEHd8tEyt8lNv~apkeN~Gv8YoNshkNFVzORCq6wUJrCiLCnZ9jEvzAkY-QMrTwWE8GY~0FbFXpPXUifyLeWmvA__",
        title: "Apple Sarees",
        originalPrice: "1599",
        discountedPrice: "960",
      },
      {
        image: "https://s3-alpha-sig.figma.com/img/cced/275e/1eb4796d139e2e08fc0a86165fc58161?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE54KcXfq-pGLUL8q1qO-f3pwpKXYWSDPx9zxtBEomXyCLtLsDsMZdDPZCA~gg8~QZva-FlZm7GrT~XWzDAp11f1B7uUEyu2pS~9uyf-ahYNLoeotpvdRcnB0CqqaMFuPIlBMSy8xUEOJ5oxbULj9Rjcx~k3dBw6H72KsBJU267sgJNS69i3iwWvU2lNd97oRdHlZXwRLXS5li9E47ouTVxBHE-dPFFVVoeV0sNvAM7G~415RZGwe2HbtCBZD9e9fEHd8tEyt8lNv~apkeN~Gv8YoNshkNFVzORCq6wUJrCiLCnZ9jEvzAkY-QMrTwWE8GY~0FbFXpPXUifyLeWmvA__",
        title: "Apple Sarees",
        originalPrice: "1599",
        discountedPrice: "960",
      },
      {
        image: "https://s3-alpha-sig.figma.com/img/cced/275e/1eb4796d139e2e08fc0a86165fc58161?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE54KcXfq-pGLUL8q1qO-f3pwpKXYWSDPx9zxtBEomXyCLtLsDsMZdDPZCA~gg8~QZva-FlZm7GrT~XWzDAp11f1B7uUEyu2pS~9uyf-ahYNLoeotpvdRcnB0CqqaMFuPIlBMSy8xUEOJ5oxbULj9Rjcx~k3dBw6H72KsBJU267sgJNS69i3iwWvU2lNd97oRdHlZXwRLXS5li9E47ouTVxBHE-dPFFVVoeV0sNvAM7G~415RZGwe2HbtCBZD9e9fEHd8tEyt8lNv~apkeN~Gv8YoNshkNFVzORCq6wUJrCiLCnZ9jEvzAkY-QMrTwWE8GY~0FbFXpPXUifyLeWmvA__",
        title: "Apple Sarees",
        originalPrice: "1599",
        discountedPrice: "960",
      },
    // Add more product data as needed
  ];

  return (
    <div className="section_fifth">
      <div className="container">
        <div className="sectionfifth_card">
          <div className="sectionfifth_card_title">Verified Product</div>
          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-3" key={index}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyProductSection;
