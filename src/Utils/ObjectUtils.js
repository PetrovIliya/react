export default class ObjectUtils
{
    /**
     * @param {Object} object
     * @return Array
     */
    static maikePairs(object)
    {
        let res = [];
        for (let i = 0; i < Object.keys(object).length; i += 2)
        {
            const objectKeys = Object.keys(object);
            const currKey = objectKeys[i];
            const nextKey = objectKeys[i + 1];
            let pair = {};
            pair[currKey] = object[currKey];
            if (nextKey)
            {
                pair[nextKey] = object[nextKey];
            }
            res.push(pair);
        }

        return res;
    }
}