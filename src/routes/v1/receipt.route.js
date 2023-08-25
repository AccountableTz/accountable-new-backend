const express = require('express');
const receiptController = require('../../controllers/receipt.controller');

const router = express.Router();

router
  .route('/')
  .post(receiptController.createReceipt)
  .get(receiptController.getReceipts);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Receipts
 *   description: Receipts entered
 */

/**
 * @swagger
 * /receipt:
 *   post:
 *     summary: Create a receipt
 *     tags: [Receipts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - receipt_number
 *               - tin
 *               - buyers_name
 *               - amount
 *               - date
 *               - receipt_items
 *             properties:
 *              receipt_number:
 *               type: string
 *              tin:
 *               type: number
 *              buyers_name:
 *                type: string
 *              amount:
 *                type: number
 *              date:
 *                type: string
 *                format: date
 *              receipt_items:
 *                type: string
 *                enum: [ {items} ]
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Receipt'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all receipts
 *     description: Retrieve all users.
 *     tags: [Receipts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: receipt_number
 *         schema:
 *           type: string
 *         description: Receipt Number
 *       - in: query
 *         name: Amount
 *         schema:
 *           type: number
 *         description: Amount
 *       - in: query
 *         name: Buyer's Name
 *         schema:
 *           type: string
 *         description: Buyer's Name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. date & amout:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of receipts
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Receipt'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
