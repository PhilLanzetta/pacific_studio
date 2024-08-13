import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ProductTile from './productTile'

const RelatedProducts = ({ productHandles }) => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        nodes {
          featuredImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
          handle
          id
          collections {
            title
          }
          metafields {
            key
            value
          }
          title
          tags
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
          totalInventory
        }
      }
    }
  `)

  const productArray = productHandles
    .map((handle) =>
      data.allShopifyProduct.nodes.filter((node) => node.handle === handle)
    )
    .flat()

  return (
    <div className='related-products-container'>
      <p className='related-title'>Related</p>
      <div className='related-product-tiles'>
        {productArray.map((product) => (
          <ProductTile product={product} key={product.id}></ProductTile>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
