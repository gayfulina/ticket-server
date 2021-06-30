const Event = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');
const escapeRegExp = require('../../utils/escapeRegExp');
const paginationSearchFormatter = require('../../utils/paginationSearchFormatter');

// Поиск с пагинацией

const eventSearch = async (req, res) => {
  try {
    let limit = +get(req, 'body.limit', 20);
    limit = limit > 100 ? 100 : limit; // показать не больше 100
    const page = +get(req, 'body.page', 1);

    const name = get(req, 'body.name', '');

    const query = {};

    if (name) {
      query.name = { $regex: escapeRegExp(name), $options: 'i' };
    }

    const totalCountPromise = Event.countDocuments(query);
    const searchPromise = eventSearchQuery({ query, page, limit });

    const PromiseAllResult = await Promise.all([totalCountPromise, searchPromise]);

    const searchResultCount = PromiseAllResult[0];
    const searchResult = PromiseAllResult[1];

    const result = paginationSearchFormatter({
      page,
      limit,
      searchResultCount,
      searchResult: searchResult.payload,
    });

    res.status(200).json(message.success('EventSearch ok', result));
  } catch (error) {
    console.log(error);
    res.status(400).json(message.fail('EventSearch error'));
  }
};

module.exports = eventSearch;

function eventSearchQuery({ query, page, limit }) {
  return Event.find(query)
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(limit * (page - 1))
    .exec()
    .then((docs) => {
      return message.success('Event found', docs);
    });
}
