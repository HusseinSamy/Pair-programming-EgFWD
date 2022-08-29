"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/:cur', (req, res) => {
    const result = req.params.cur;
    const USD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(+result);
    const EGP = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' }).format(+result);
    const EURO = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(+result);
    res.json({ usd: USD, egp: EGP, Euro: EURO });
});
app.listen(3000, () => {
    console.log('listening on port 3000');
});
