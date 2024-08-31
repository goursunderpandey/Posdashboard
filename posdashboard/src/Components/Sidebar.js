import React, { useState } from 'react';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <button
            className={`nav-link ${activeMenu === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuClick('dashboard')}
            style={{
              border: activeMenu === 'dashboard' ? '2px solid #0d6efd' : 'none',
            }}
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeMenu === 'orders' ? 'active' : ''}`}
            onClick={() => handleMenuClick('orders')}
            style={{
              border: activeMenu === 'orders' ? '2px solid #0d6efd' : 'none',
            }}
          >
            Orders
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeMenu === 'products' ? 'active' : ''}`}
            onClick={() => handleMenuClick('products')}
            style={{
              border: activeMenu === 'products' ? '2px solid #0d6efd' : 'none',
            }}
          >
            Products
          </button>
          {activeMenu === 'products' && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeMenu === 'allProducts' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('allProducts')}
                  style={{
                    border: activeMenu === 'allProducts' ? '2px solid #0d6efd' : 'none',
                  }}
                >
                  All Products
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeMenu === 'newProduct' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('newProduct')}
                  style={{
                    border: activeMenu === 'newProduct' ? '2px solid #0d6efd' : 'none',
                  }}
                >
                  New Product
                </button>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button
            className={`nav-link ${activeMenu === 'customers' ? 'active' : ''}`}
            onClick={() => handleMenuClick('customers')}
            style={{
              border: activeMenu === 'customers' ? '2px solid #0d6efd' : 'none',
            }}
          >
            Customers
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
