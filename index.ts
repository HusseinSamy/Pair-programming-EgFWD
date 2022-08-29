import express from 'express'

const app = express();

app.get('/:cur', (req, res) =>{
    const result = req.params.cur;
    
    const USD = new Intl.NumberFormat('en-US',
  { style: 'currency', currency: 'USD' }
    ).format(+result);
    
    const EGP = new Intl.NumberFormat('en-US',
  { style: 'currency', currency: 'EGP' }
    ).format(+result);
    
    const EURO = new Intl.NumberFormat('en-US',
  { style: 'currency', currency: 'EUR' }
    ).format(+result);


    res.json({usd: USD, egp: EGP, Euro: EURO})
});

app.listen(3000, () => {
  console.log('listening on port 3000')
})