'use strict'

const AWS = require('aws-sdk')
const uuid = require('uuid')

// Create a DynamoDB instance
const docClient = new AWS.DynamoDB.DocumentClient()
const groupsTable = process.env.GROUPS_TABLE

// Create an event handler
exports.handler = async (event) => {
  console.log('Processing event: ', event)
  // Generate a random string to use as 'id' key
  const itemId = uuid.v4()

  // Parse the body of the event
  const parsedBody = JSON.parse(event.body)

  // Create a new item to store in DynamoDB
  const newItem = {
    id: itemId,
    ...parsedBody
  }

  // Store the above item in DynamoDB
  await docClient.put({
    TableName: groupsTable,
    Item: newItem
  }).promise()

  // Return a response with the stored item
  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: {newItem}
  }
}