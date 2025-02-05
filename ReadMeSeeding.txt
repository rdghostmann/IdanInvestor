  //user
  await connectToDB();
  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword =  await bcrypt.hash('user123', 10);

  const users = [
    {
      username: 'john_doe',
      email: 'john@example.com',
      password: userPassword, 
      phone: '+1234567890',
      country: 'USA',
      state: 'California',
      walletBalance: 1000,
      role: 'user',
      isVerified: true,
    },
    {
      username: 'jane_smith',
      email: 'jane@example.com',
      password: userPassword,
      phone: '+9876543210',
      country: 'Canada',
      state: 'Ontario',
      walletBalance: 1500,
      role: 'user',
      isVerified: true,
    },
    {
      username: 'mike_jones',
      email: 'mike@example.com',
      password: adminPassword,
      phone: '+1928374650',
      country: 'UK',
      state: 'London',
      walletBalance: 2000,
      role: 'user',
      isVerified: false,
    },
    {
      username: 'admin_user',
      email: 'admin@example.com',
      password: adminPassword,
      phone: '+1122334455',
      country: 'Germany',
      state: 'Berlin',
      walletBalance: 5000,
      role: 'admin',
      isVerified: true,
    },
  ];

  try {
    User.insertMany(users);
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }


  //investmentplan
  await connectDB();

  const plans = [
    { name: 'Starter Plan', minAmount: 200, maxAmount: 500, roi: 38, duration: '3 months' },
    { name: 'Standard Plan', minAmount: 501, maxAmount: 750, roi: 40, duration: '6 months' },
    { name: 'Premium Plan', minAmount: 751, maxAmount: 1000, roi: 42, duration: '12 months' },
  ];

  try {
    const result = await InvestmentPlan.insertMany(plans);
    console.log('Investment plans seeded successfully:', result);
  } catch (error) {
    console.error('Error seeding investment plans:', error);
  }

  await connectDB();

  const assets = [
    { name: "Bitcoin", symbol: "BTC", network: "Bitcoin", depositAddress: "bc1qxyz..." },
    { name: "Ethereum", symbol: "ETH", network: "Ethereum", depositAddress: "0x123..." },
    { name: "Solana", symbol: "SOL", network: "Solana", depositAddress: "3abcxyz..." },
  ];
  try {

    await Asset.insertMany(assets);
    console.log("Assets Seeded!");
  } catch (error) {
    console.error("Seeding failed", error);
  }




Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually 
to a simple value before passing it to props.

Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. 

[
{
    qrcodeImage: null,
    _id: new ObjectId('123'), 
    name: 'Bitcoin',
    symbol: 'BTC',
    network: 'Bitcoin',
    depositAddress: 'bc1qxyz...',
    status: 'active',

  },
{
    qrcodeImage: null,
    _id: new ObjectId('123'), 
    name: 'Solana', 
    symbol: 'SOL', 
    network: 'Solana', 
    depositAddress: '3abcxyz...', 
    status: 'active',

  }]

Assist in implementing a functionality in a NextJs App Router Form that when an options is selected, it fetch