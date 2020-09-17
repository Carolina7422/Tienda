import React from 'react'
import { Modal, Button, Space } from 'antd';
import { StyleSheetManager } from 'styled-components';

const ConfirmNewProduct = () => {
  function confirm() {
    Modal.confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消',
    });
  }


  return (  
    <Button onClick={confirm}>Confirm</Button>


  );
}
 
export default ConfirmNewProduct;