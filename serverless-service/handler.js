"use strict";

module.exports.tmt_lambda = async (event) => {
  const emoijs = [":)", ":D", ";)", "<3"];
  let rank = 0;

  if (event.queryStringParameters && event.queryStringParameters.rank) {
    rank = event.queryStringParameters.rank;
    rank = rank >= emoijs.length ? emoijs.length - 1 : rank;
  }

  const rankEmoji = emoijs[rank];

  return {
    statusCode: 200,
    header: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
        rank: rankEmoji,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
