import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollections } from '../../redux/shop/shop.selector'
import CollectionPreview from '../../components/collection-preview/collection-preview'

import './shop.styles.scss'

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...itemProps }) => (
      <CollectionPreview key={id} {...itemProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)
