const express = require('express');
const opintorekisteriRoutes = require('./routes/opintorekisteriRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api', opintorekisteriRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});