import React from 'react';

const Store = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Fetch items from backend
    const fetchItems = async () => {
      try {
        const response = await fetch('http://backend/api/items');
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.error('Failed to fetch items');
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handlePurchase = async (itemId) => {
    try {
      const response = await fetch(`http://backend/api/purchase/${itemId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: '123' }),
      });

      if (response.ok) {
        // Handle successful purchase
      } else {
        console.error('Failed to purchase item');
      }
    } catch (error) {
      console.error('Error purchasing item:', error);
    }
  };

  return (
    <div>
      <h2>Store</h2>
      {loading ? (
        <p>Loading items...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div>{item.name}</div>
              <button onClick={() => handlePurchase(item.id)}>Purchase</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Store;