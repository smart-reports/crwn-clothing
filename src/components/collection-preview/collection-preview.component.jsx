import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';
import menuItemComponent from '../menu-item/menu-item.component';

const CollectionPreview = ({title, items}) => (
<div className='collection-preview'>

<h1 className='title'>{title.toUppercase()}</h1>
<div className='preview'>
  {item.map((item) => (
  <div key={item.id}>{item.name}</div>
  
    ))}


</div>
</div>


);

export default CollectionPreview;