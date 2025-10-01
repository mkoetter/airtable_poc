Airtable API for "Content Calendar"

[Open base](https://airtable.com/appV0xzl937ervf3A)

[INTRODUCTION](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/introduction)

[METADATA](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/metadata)

[RATE LIMITS](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/ratelimits)

[AUTHENTICATION](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/authentication)

[REQUESTS TABLE](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests)[Fields](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:fields)[List records](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:list)[Retrieve a record](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:retrieve)[Create records](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:create)[Update/Upsert records](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:update)[Delete records](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:delete)

[PRODUCTION TASKS TABLE](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks)[Fields](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:fields)[List records](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:list)[Retrieve a record](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:retrieve)[Create records](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:create)[Update/Upsert records](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:update)[Delete records](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:delete)

[ARTISTS TABLE](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:artists)

[ERRORS](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/errors)

curl

JavaScript

# INTRODUCTION

The  Content Calendar  API provides an easy way to integrate your  Content Calendar  data in Airtable with any external system. The API closely follows REST semantics, uses JSON to encode objects, and relies on standard HTTP codes to signal operation outcomes.

The API documentation below is specifically generated for your base. We recommend that you use the  [graphical Airtable interface](https://airtable.com/appV0xzl937ervf3A)  to add a few records of example data for each table. These records will be displayed in the documentation examples generated below.

To view documentation for all available endpoints, as well as documentation that has not been generated specific to your base, please visit  [here](https://airtable.com/developers/web/api).

The ID of this base is  `appV0xzl937ervf3A`.

**Please note**: if you make changes to a field (column) name or type, the API interface for those fields will change correspondingly. Therefore, please make sure to update your API implementation accordingly whenever you make changes to your Airtable schema from the graphical interface.

Official API client:

-   JavaScript:  [airtable.js](https://github.com/Airtable/airtable.js)  (Node.js + browser)

Community-built API clients:

-   Ruby:  [airrecord](https://github.com/sirupsen/airrecord)
-   .NET:  [airtable.net](https://github.com/ngocnicholas/airtable.net)
-   Python 3:  [pyairtable](https://github.com/gtalarico/pyairtable)
-   Python 2/3:  [airtable.py](https://github.com/josephbestjames/airtable.py)

# METADATA

This API gives you the ability to list all of your bases, tables, fields, and views. For more, see the API reference documentation for  [List bases](https://airtable.com/developers/web/api/list-bases)  and  [Get base schema](https://airtable.com/developers/web/api/get-base-schema).

# RATE LIMITS

The API is limited to 5 requests per second per base. If you exceed this rate, you will receive a 429 status code and will need to wait 30 seconds before subsequent requests will succeed.

The  [official JavaScript client](https://github.com/Airtable/airtable.js)  has built-in retry logic.

If you anticipate a higher read volume, we recommend using a caching proxy. This rate limit is the same for all plans and increased limits are not currently available.

# AUTHENTICATION

Airtable uses simple token-based authentication. For personal development, we recommend using  [personal access tokens](https://airtable.com/developers/web/guides/personal-access-tokens), which can be created at  [/create/tokens](https://airtable.com/create/tokens). To learn more about other authentication methods like OAuth, please visit our  [developer documentation](https://airtable.com/developers/web/api/authentication).

**Using Airtable.js in the browser is strongly discouraged, since that will expose your API key to everyone who has access to that web page.**

To configure Airtable.js either store your secret API token (e.g. personal access token) in the  `AIRTABLE_API_KEY`  environment variable or pass it directly to the client library. Note that environment variables are not available when using Airtable.js in the browser.

All API requests must be authenticated and made over HTTPS.

#### EXAMPLE USING ENVIRONMENT VARIABLE

```
# Shell:
$ export AIRTABLE_API_KEY=YOUR_SECRET_API_TOKEN

# Node:
const base = require('airtable').base('appV0xzl937ervf3A');

```

#### EXAMPLE USING CUSTOM CONFIGURATION

```
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'YOUR_SECRET_API_TOKEN'
});
var base = Airtable.base('appV0xzl937ervf3A');

```

# REQUESTS TABLE

The id for  Requests  is  tblli3ounLjB7DAUV. Table ids and table names can be used interchangeably in API requests. Using table ids means table name changes do not require modifications to your API request.

## Fields

Each record in the  Requests  table contains the following fields:

Field names and field ids can be used interchangeably. Using field ids means field name changes do not require modifications to your API request. We recommend using field ids over field names where possible, to reduce modifications to your API request if the user changes the field name later.

### FIELD NAME

### FIELD ID

### TYPE

### DESCRIPTION

Request Title

fldf5pT9GWsMtgCPB

Text

string

A single line of text.

#### EXAMPLE VALUES

```
"October Election Coverage Graphics"
```

```
"Podcast Episode Artwork: Climate Series"
```

```
"Breaking News Alert Animation"
```

```
"Weekly Social Media Recap Video"
```

Description

flds7ZIZZAniv2koi

Long text

string

Multiple lines of text, which may contain "mention tokens", e.g.  
`<airtable:mention id="menE1i9oBaGX3DseR">@Alex</airtable:mention>`

#### EXAMPLE VALUES

```
"Requesting a set of infographics and lower-thirds for the upcoming October election night broadcast. Please include candidate headshots and polling da..."
```

```
"Need custom cover art for the next episode in our climate change podcast series. Should reflect the episode's focus on renewable energy innovations."
```

```
"Animated alert for breaking news segments. Quick turnaround required. Use brand colors and logo."
```

```
"Short video summarizing top news stories of the week for social media platforms. Include subtitles and highlight reels."
```

Requester Name

fldOEbArYK2KqgUAH

Text

string

A single line of text.

#### EXAMPLE VALUES

```
"Jessica Lee"
```

```
"Samir Patel"
```

```
"Tina Morales"
```

```
"Carlos Nguyen"
```

Requester Email

fld7QdDUtIsFZMG2E

Text

string

A single line of text.

#### EXAMPLE VALUES

```
"jessica.lee@newnewsnetworkbd62.com"
```

```
"samir.patel@newnewsnetwork0945.com"
```

```
"tina.morales@newnewsnetwork03fa.com"
```

```
"carlos.nguyen@newnewsnetworka2c3.com"
```

Priority

fldaZMcdF9BH6tIXw

Single select

string

Selected option name.

When creating or updating records, if  the  choice string does not exactly match an existing option, the request will fail with an  `INVALID_MULTIPLE_CHOICE_OPTIONS`error unless the  `typecast`  parameter is enabled. If  `typecast`  is enabled, a new choice will be created if one does not exactly match.

#### POSSIBLE VALUES

```
[
    "High",
    "Medium",
    "Low"
]
```

Status

fldAFP4Z3QtRgmnyM

Single select

string

Selected option name.

When creating or updating records, if  the  choice string does not exactly match an existing option, the request will fail with an  `INVALID_MULTIPLE_CHOICE_OPTIONS`error unless the  `typecast`  parameter is enabled. If  `typecast`  is enabled, a new choice will be created if one does not exactly match.

#### POSSIBLE VALUES

```
[
    "Queued",
    "In Review",
    "Assigned",
    "In Production",
    "Completed",
    "Rejected"
]
```

Date Submitted

fldidDMFkCBOODLUV

Date

string (ISO 8601 formatted date)

UTC date, e.g. "2014-09-05".

#### EXAMPLE VALUES

```
"2025-09-30"
```

```
"2025-09-28"
```

```
"2025-09-29"
```

```
"2025-09-27"
```

Reference Images

fldVX0qt3cLBRxD5T

Attachment

array of attachment objects

Each attachment object may contain the following properties. To see which fields are required or optional, please consult the relevant section:  [retrieve](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:retrieve),  [create](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:create),  [update](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:update), or  [delete](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:delete).  
  
Because this field is configured to show attachments in reversed order, the order of attachments in the app will be reversed compared to what you see here.  
  

id

string

unique attachment id

url

string

url, e.g. "https://v5.airtableusercontent.com/foo".  
  
Note: URLs returned will expire 2 hours after being returned from our API. If you want to persist the attachments, we recommend downloading them instead of saving the URL. See  [our support article](https://support.airtable.com/docs/airtable-attachment-url-behavior)  for more information.

filename

string

filename, e.g. "foo.jpg"

size

number

file size, in bytes

type

string

content type, e.g. "image/jpeg"

width

number

height

number

width/height, in pixels (these may be available if the attachment is an image)

thumbnails.small.url

string

thumbnails.large.url

string

url of small/large thumbnails (these may be available if the attachment is an image or document). See notes under  `url`  about the lifetime of these URLs.

thumbnails.small.width

number

thumbnails.small.height

number

thumbnails.large.width

number

thumbnails.large.height

number

width/height of small/large thumbnails, in pixels (these will be available if the corresponding thumbnail url is available)

#### EXAMPLE VALUES

```
[
    {
        "id": "attHlqDOCHYMNBD4q",
        "width": 600,
        "height": 401,
        "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/TzY7raKe-XkOkyT1hUc2_g/PDdXzgFDDKQkQI_dGot6q_s1CkUX2ODm_mIQ_YP-MUaw0lpQGscRyUB0mG01rKfq3oc_QNHD-7Tgz-zxYjo-lvrCER9MdLjC027ZR9qjTiylYdgmKlsnhwAfvK2iJTffCDhJjd_fzErCenN39JnBqDOFy7ULF-Q00PJL1qvRgac/dP-sFkyjjP-5yyz9dJFHAGeY2gzz6llIwwAwl9TmKhA",
        "filename": "abstract_35.png",
        "size": 302330,
        "type": "image/png",
        "thumbnails": {
            "small": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/o1LBYKEOlhpQpO_JqnmuMg/9rl8ZjG3xLHmnJHyM0nmSBaOk6YVv4xMAVsoaD7vckTZBDwzSUfUKBZiC1-XQz8g2F6kPAD6nCSZjbG4PQNr_7y9gFdtUG1bEczkgR9RmXnPG67-9DiK8N9itMq_CO7wnCS4sxBPI7C7zbUX5IZjLQ/2g3B2d7NEZRo2ezTqA-JkkJ7PEMGJu99dpfatRXf-AY",
                "width": 54,
                "height": 36
            },
            "large": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/1XujbupxWk6xgYZYcVwpCQ/hwdNhXhziaPyPTOoVvhjWDRwAd6uMOKPc_j0un2KsaWl2sD4wL47NFHXzWBsG4pEhEthM128QM7OgXK-9vYm-w8K6N_PUoYI70apuQSUL1RT7Iw-uKhMCC5Byvaljq2ZchXEcFrSUmaCAYLR__iV5w/-2466c5AbotriMUrjfrP2P06WPc8P8XfrYCB7hxrEJU",
                "width": 600,
                "height": 401
            },
            "full": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/eAYxbwhpP_xQUD12HB18oQ/3xO87QLWm7ap-HBZ_Hofd5qnZPTI56M5ctyQvi5CXhahuvCT1qlGRa874GkzSbLPvbxJN_OjeoCLNVw5WosZYKrJbIRrluBFiLh5uZiibrpMSKYLGqaD346cmKoYrcOmo80x9bbU9HSgnwvLV7rTQQ/4ZQ6LCoaBBdauM1aAtWZZs842mNy1rds9cv_hHjEvxg",
                "width": 600,
                "height": 401
            }
        }
    }
]
```

```
[
    {
        "id": "attXgLCVvLhx488xW",
        "width": 600,
        "height": 401,
        "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/44gCBWbs-PeMsAjyFrXjzw/pXdrVrOuwmeW7apcrMVwsyIKJ0WbeW3b-Devz3iqO5UV_CAAaXNYgKRIEf1Su3442QVuHqfsIAfaR8q83AZqdEWgkej9QB0-T-2RtBL23cGxMsL-BbLz2772CqDvP3I5cF3ARZ36GnyS5R29hMQIYXEd2imkLgM-gmhiFKzYj_o/VJoUJxD77fELLgyg7_C7Y1ig4kdYEj3KontH-5J-jRs",
        "filename": "abstract_16.png",
        "size": 184728,
        "type": "image/png",
        "thumbnails": {
            "small": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/7ZAEATpa7839s-BXNP2MbQ/Csnepd_BfISKY7qeJ_1hE1xEgRFAqOY8WfxU_OGRPj60x7nVqD4PpnPaL8dHvjXF6i9h5vOuN3EQ4SNYHcWSk7LroNE2knzbjrY4rColQ_HvnU413lV2-CyeFTnviSYnrttMUOfjELXmoLERsqt2vg/sPnPN_9aff0QMUhKQvpvoHKWtlxhhwDOjlSyw44nLCA",
                "width": 54,
                "height": 36
            },
            "large": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/S6kogTxMtSjGlhJvZU2ejg/KHe23dqnKwLAX0s_lTZZCOXP99qxdTU2GyV7QYBdX30D7qW70GNWMI5jIsRq2QdvA3hR9oLps3AA2UQDMdhf8i68_AIucAm4wVRzRYuU8Z3G3TGURSDwkW8C6ppR7fQwzg48b9WmOETAPFZgvD36xQ/LtQeYL26zNAFSUzd3W24BI1PBFfdxqsVd5gOXR6LV6E",
                "width": 600,
                "height": 401
            },
            "full": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/wUpttfDjUr3rOWspljiv_A/cqbl6b1iMRbvy6njdU95Br7X5UoV1j3YfI_2sqN0GBDqzsNBY-KsfsUuDN5T8v0SKLDMVwkcn3DHArCaQrK8gxyQybPGkJ-bidaWc7khjAVxfLgG9gO88jwwBYmxi4oMsywy5f5DCSK7fsm_USN6tQ/6hzWAGCxPO0MVkUufCJ4ZGcx0T7nc1G3vhsnyl62k4c",
                "width": 600,
                "height": 401
            }
        }
    }
]
```

Assigned Artist

fldemSKE737MBgczg

Link to another record

array of record IDs (strings)

Array of linked records IDs from the  Artists  table.

#### EXAMPLE VALUE

```
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]
```

Production Tasks

fld8yW9ip1KWkwOmF

Link to another record

array of record IDs (strings)

Array of linked records IDs from the  Production Tasks  table.

#### EXAMPLE VALUE

```
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]
```

Days in Current Status

fldPmtsXamBlmDyFM

Formula

number, string, array of numbers or strings

Computed value:  IF(Status, DATETIME_DIFF(TODAY(),  Date Submitted, 'days')).

#### EXAMPLE VALUES

```
1
```

```
3
```

```
2
```

```
4
```

```
{
    "specialValue": "NaN"
}
```

# Production Tasks

flduvyg158wYLD2rA

Count

number

Number of linked  Production Tasks  records.

#### EXAMPLE VALUES

```
1
```

```
1
```

```
1
```

```
1
```

```
0
```

# Completed Tasks

fld9GwUzaKO4U1D2B

Rollup

number or string

Computed value: SUM(values = 'Completed') for  Status  in  Production Tasks.

#### EXAMPLE VALUES

```
0
```

```
0
```

```
0
```

```
1
```

```
0
```

Task Completion %

fldnKF35ZrNgti0VL

Formula

number, string, array of numbers or strings

Computed value:  IF(# Production Tasks  > 0,  # Completed Tasks  /  # Production Tasks, 0).

#### EXAMPLE VALUES

```
0
```

```
0
```

```
0
```

```
1
```

```
0
```

Assigned Artist Email

flddwUBBdKXgtXkna

Lookup

array of numbers, strings, booleans, or objects

Array of  Email  fields in linked  Artists  records.

#### EXAMPLE VALUES

```
[
    "jordan.kim@newnewsnetwork3ca7.com"
]
```

```
[
    "ava.patel@newnewsnetwork3863.com"
]
```

```
[
    "marcus.lee@newnewsnetwork9afe.com"
]
```

```
[
    "sofia.martinez@newnewsnetwork45b1.com"
]
```

Request Summary (AI)

fldqZDjnllkPJWmXP

Request Category (AI)

fld7Vz2GsRdjQt8tu

Slug

fld1S7xY8t3kH6fbI

Text

string

A single line of text.

#### EXAMPLE VALUES

```
"foo", "bar"
```

StoryID

fldD4PROj12KUtaPT

Text

string

A single line of text.

#### EXAMPLE VALUES

```
"foo", "bar"
```

Asset

fldKpqFBi2kHq5imo

Single select

string

Selected option name.

When creating or updating records, if  the  choice string does not exactly match an existing option, the request will fail with an  `INVALID_MULTIPLE_CHOICE_OPTIONS`error unless the  `typecast`  parameter is enabled. If  `typecast`  is enabled, a new choice will be created if one does not exactly match.

#### POSSIBLE VALUES

```
[
    "Video",
    "Graphic",
    "Story",
    "Script",
    "Image",
    "Gallery",
    "Live Shot"
]
```

## List Requests records

To list records in  Requests, use the  `select`  method.

`select`  returns a query object. To fetch the records matching that query, use the  `eachPage`  or  `firstPage`  method of the query object.

Returned records do not include any fields with "empty" values, e.g.  `""`,  `[]`, or  `false`.

**Note:**  Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to  `/v0/{baseId}/{tableIdOrName}/listRecords`  while passing the parameters within the body of the request instead of the query parameters. See  [our support article on this](https://support.airtable.com/docs/enforcement-of-url-length-limit-for-public-api-requests)  for more information.

You can use the following parameters to filter, sort, and format the results:

fields`array of strings`optional

Only data for fields whose names are in this list will be included in the result. If you don't need every field, you can use this parameter to reduce the amount of data transferred.

For example, to only return data from  Request Title  and  Description,  pass in:

fields: ["Request Title", "Description"]

You can also perform the same action with field ids (they can be found in the fields section):

fields: ["fldf5pT9GWsMtgCPB", "flds7ZIZZAniv2koi"]

filterByFormula`string`optional

A  [formula](https://support.airtable.com/docs/formula-field-reference)  used to filter records. The formula will be evaluated for each record, and if the result is not  `0`,  `false`,  `""`,  `NaN`,`[]`, or  `#Error!`  the record will be included in the response. We recommend testing your formula in the Formula field UI before using it in your API request.

If combined with the  `view`  parameter, only records in that view which satisfy the formula will be returned.

The formula must be encoded first before passing it as a value. You can use  [this tool](https://codepen.io/airtable/full/MeXqOg)  to not only encode the formula but also create the entire url you need. For example, to only include records where  Request Title  isn't empty, pass in  `NOT({Request Title} = '')`  as a parameter like this:

filterByFormula: "NOT({Request Title} = '')"

  

**Note:**  Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to`/v0/{baseId}/{tableIdOrName}/listRecords`  while passing the parameters within the body of the request instead of the query parameters. See  [our support article on this](https://support.airtable.com/docs/enforcement-of-url-length-limit-for-public-api-requests)  for more information.

maxRecords`number`optional

The maximum total number of records that will be returned in your requests. If this value is larger than  `pageSize`  (which is 100 by default), you may have to load multiple pages to reach this total. See the Pagination section below for more.

pageSize`number`optional

The number of records returned in each request. Must be less than or equal to 100. Default is 100. See the Pagination section below for more.

sort`array of objects`optional

A list of sort objects that specifies how the records will be ordered. Each sort object must have a  `field`  key specifying the name of the field to sort on, and an optional  `direction`  key that is either  `"asc"`  or  `"desc"`. The default direction is  `"asc"`.

The  `sort`  parameter overrides the sorting of the view specified in the  `view`  parameter. If neither the  `sort`  nor the  `view`parameter is included, the order of records is arbitrary.

For example, to sort records by  Request Title  in descending order, send these two query parameters:

sort%5B0%5D%5Bfield%5D=Request%20Title

sort%5B0%5D%5Bdirection%5D=desc

For example, to sort records by  Request Title  in descending order, pass in:

[{field: "Request Title", direction: "desc"}]

view`string`optional

The name or ID of a view in the  Requests  table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view unless the  `sort`  parameter is included, which overrides that order. Fields hidden in this view will be returned in the results. To only return a subset of fields, use the  `fields`  parameter.

cellFormat`string`optional

The format that should be used for cell values. Supported values are:

`json`: cells will be formatted as JSON, depending on the field type.

`string`: cells will be formatted as user-facing strings, regardless of the field type. The  `timeZone`  and  `userLocale`parameters are required when using  `string`  as the  `cellFormat`.

**Note:**  You should not rely on the format of these strings, as it is subject to change.

The default is  `json`.

timeZone`string`optional

The  [time zone](https://support.airtable.com/docs/supported-timezones-for-set-timezone)  that should be used to format dates when using  `string`  as the  `cellFormat`. This parameter is required when using  `string`  as the  `cellFormat`.

userLocale`string`optional

The  [user locale](https://support.airtable.com/docs/supported-locale-modifiers-for-set-locale)  that should be used to format dates when using  `string`  as the  `cellFormat`. This parameter is required when using  `string`  as the  `cellFormat`.

returnFieldsByFieldId`boolean`optional

An optional boolean value that lets you return field objects where the key is the field id.

This defaults to  `false`, which returns field objects where the key is the field name.

recordMetadata`array of strings`optional

An optional field that, if includes  `commentCount`, adds a  `commentCount`  read only property on each record returned.

### Pagination

The server returns one page of records at a time. Each page will contain  `pageSize`  records, which is 100 by default.

To fetch the next page of records, call  `fetchNextPage`.

Pagination will stop when you've reached the end of your table. If the  `maxRecords`  parameter is passed, pagination will stop once you've reached this maximum.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Requests').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Request Title'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

```

#### OUTPUT

```
Retrieved October Election Coverage Graphics

```

```
Retrieved Podcast Episode Artwork: Climate Series

```

```
Retrieved Breaking News Alert Animation

```

#### FETCH FIRST PAGE

```
// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
base('Requests').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Request Title'));
    });
});

```

#### FETCH ADDITIONAL RECORD METADATA

```
// If you want to fetch the number of comments for each record,
// include the `recordMetadata` param.
base('Requests').select({
    recordMetadata: ['commentCount']
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved a record with', record.commentCount, 'comments');
    });
});

```

Iteration may timeout due to client inactivity or server restarts. In that case, the client will receive a 422 response with error message  `LIST_RECORDS_ITERATOR_NOT_AVAILABLE`. It may then restart iteration from the beginning.

## Retrieve a Requests record

To retrieve an existing record in  Requests  table, use the  `find`  method.

Any "empty" fields (e.g.  `""`,  `[]`, or  `false`) in the record will not be returned.

In  [attachment objects](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:fields)  included in the retrieved record (Reference Images), only  `id`,  `url`, and  `filename`  are always returned. Other attachment properties may not be included. Note: Attachment URLs returned will expire 2 hours after being returned from our API. If you want to persist the attachments, we recommend downloading them instead of saving the URL. See  [our support article](https://support.airtable.com/docs/airtable-attachment-url-behavior)  for more information.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Requests').find('rec5GUAUiRWHGqLa0', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});

```

#### OUTPUT

```
Retrieved rec5GUAUiRWHGqLa0
```

## Create Requests records

To create new records,  use the  `create`  method.  Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

The first argument should be  an array of up to 10 record objects. Each of these objects should have one key whose value is an inner object containing your record's cell values, keyed by either field name or field id.

Returns an array of record objects created if the call succeeded, including record IDs which will uniquely identify the records within  Content Calendar.

To create new attachments in  Reference Images, set the field value to an  [array of attachment objects](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:fields). When creating an attachment,  `url`  is required, and  `filename`  is optional. Airtable will download the file at the given  `url`  and keep its own copy of it. All other attachment object properties will be generated server-side soon afterward.  
  
Note that in most cases the API does not currently return an error code for failed attachment object creation given attachment uploading happens in an asynchronous manner, such cases will manifest with the attachment object either being cleared from the cell or persisted with generated URLs that return error responses when queried. If the same attachment URL fails to upload multiple times in a short time interval then * the API may return an ATTACHMENTS_FAILED_UPLOADING error code in the details field of the response and the attachment object will * be cleared from the cell synchronously.  
  
We also require URLs used to upload have the https:// or http:// protocol (Note: http:// support will be removed in the near future), have a limit of 3 max redirects, and a file size limit of 1GB. In addition, URLs must be publicly accessible, in cases where cookie authentication or logging in to access the file is required, the login page HTML will be downloaded instead of the file.  
  
Attachment URLs returned will expire 2 hours after being returned from our API. If you want to persist the attachments, we recommend downloading them instead of saving the URL.  
  
If too many attachments are uploaded within a short period of time, the server may return a partial failure on record creation with an "Attachment Upload Rate Too High" error. See  [our support article](https://support.airtable.com/docs/airtable-attachment-url-behavior)  for more information.

Values for  Days in Current Status,  # Production Tasks,  # Completed Tasks,  Task Completion %  and  Assigned Artist Email  are automatically computed by Airtable and cannot be directly created.

The Airtable API will perform best-effort automatic data conversion from string values if the  `typecast`  parameter is passed  in (click to show example).  Automatic conversion is disabled by default to ensure data integrity, but it may be helpful for integrating with 3rd party data sources.

You can also include a single record object at the top level.  Click here to show an example.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Requests').create([
  {
    "fields": {
      "Request Title": "October Election Coverage Graphics",
      "Description": "Requesting a set of infographics and lower-thirds for the upcoming October election night broadcast. Please include candidate headshots and polling da...",
      "Requester Name": "Jessica Lee",
      "Requester Email": "jessica.lee@newnewsnetworkbd62.com",
      "Priority": "High",
      "Status": "Queued",
      "Date Submitted": "2025-09-30",
      "Reference Images": [
        {
          "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/TzY7raKe-XkOkyT1hUc2_g/PDdXzgFDDKQkQI_dGot6q_s1CkUX2ODm_mIQ_YP-MUaw0lpQGscRyUB0mG01rKfq3oc_QNHD-7Tgz-zxYjo-lvrCER9MdLjC027ZR9qjTiylYdgmKlsnhwAfvK2iJTffCDhJjd_fzErCenN39JnBqDOFy7ULF-Q00PJL1qvRgac/dP-sFkyjjP-5yyz9dJFHAGeY2gzz6llIwwAwl9TmKhA"
        }
      ],
      "Assigned Artist": [
        "recqnwmuGr9i8aO5M"
      ],
      "Production Tasks": [
        "recL88PRTg3RxCPrH"
      ],
      "Request Summary (AI)": {
        "state": "generated",
        "value": "Broadcast Graphics",
        "isStale": true
      },
      "Request Category (AI)": {
        "state": "generated",
        "value": "",
        "isStale": true
      }
    }
  },
  {
    "fields": {
      "Request Title": "Podcast Episode Artwork: Climate Series",
      "Description": "Need custom cover art for the next episode in our climate change podcast series. Should reflect the episode's focus on renewable energy innovations.",
      "Requester Name": "Samir Patel",
      "Requester Email": "samir.patel@newnewsnetwork0945.com",
      "Priority": "Medium",
      "Status": "Assigned",
      "Date Submitted": "2025-09-28",
      "Reference Images": [
        {
          "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/44gCBWbs-PeMsAjyFrXjzw/pXdrVrOuwmeW7apcrMVwsyIKJ0WbeW3b-Devz3iqO5UV_CAAaXNYgKRIEf1Su3442QVuHqfsIAfaR8q83AZqdEWgkej9QB0-T-2RtBL23cGxMsL-BbLz2772CqDvP3I5cF3ARZ36GnyS5R29hMQIYXEd2imkLgM-gmhiFKzYj_o/VJoUJxD77fELLgyg7_C7Y1ig4kdYEj3KontH-5J-jRs"
        }
      ],
      "Assigned Artist": [
        "recxNmHrgugHrBRgF"
      ],
      "Production Tasks": [
        "recAt7KmdStAf5YrN"
      ],
      "Request Summary (AI)": {
        "state": "generated",
        "value": "Podcast Artwork",
        "isStale": true
      },
      "Request Category (AI)": {
        "state": "generated",
        "value": "",
        "isStale": true
      }
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
```

#### OUTPUT

```
rec5GUAUiRWHGqLa0
recJy23ZNXo3EhmJ8
```

## Update  Requests records

To update  Requests  records,  use the  `update`  or  `replace`  method. An  `update`  will only update the fields you include. Fields not included will be unchanged.  A  `replace`  will perform a destructive update and clear all unincluded cell values.  A  `replace`  call on  Requests  records will always fail.  The example at the right uses the  non-destructive`update`  method.  Click here to show a  destructive  `replace`  call.

The first argument should be  an array of up to 10 record objects. Each of these objects should have an  `id`  property representing the record ID and a  `fields`  property which contains all of your record's cell values by field name or field id for all of your record's cell values by  field name.

To add attachments to  Reference Images, add new  [attachment objects](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:fields)  to the existing array. Be sure to include all existing attachment objects that you wish to retain, to keep preexisting attachments providing  `id`  is required (which can be retrieved using the  [retrieve](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:retrieve)  endpoint), other fields are ignored. For the new attachments being added,  `url`  is required, and  `filename`  is optional. To remove attachments, include the existing array of attachment objects, excluding any that you wish to remove.  
  
Note that in most cases the API does not currently return an error code for failed attachment object creation given attachment uploading happens in an asynchronous manner, such cases will manifest with the attachment object either being cleared from the cell or persisted with generated URLs that return error responses when queried. If the same attachment URL fails to upload multiple times in a short time interval then * the API may return an ATTACHMENTS_FAILED_UPLOADING error code in the details field of the response and the attachment object will * be cleared from the cell synchronously.  
  
We also require URLs used to upload have the https:// or http:// protocol (Note: http:// support will be removed in the near future), have a limit of 3 max redirects, and a file size limit of 1GB. In addition, URLs must be publicly accessible, in cases where cookie authentication or logging in to access the file is required, the login page HTML will be downloaded instead of the file.  
  
If too many attachments are uploaded within a short period of time, the server may return a partial failure on record creation with an "Attachment Upload Rate Too High" error.

To link to new records in  Assigned Artist  and  Production Tasks, add new linked record IDs to the existing array. Be sure to include all existing linked record IDs that you wish to retain. To unlink records, include the existing array of record IDs, excluding any that you wish to unlink.

Description  may contain "mention tokens". A  _mention token_  corresponds to a "@mention" in Airtable's user interface; here in the API it will look like  `<airtable:mention id="menE1i9oBaGX3DseR">@Alex</airtable:mention>`. Mention tokens cannot be created via this API and should be left intact (or wholly removed) when updating long text fields.

Values for  Days in Current Status,  # Production Tasks,  # Completed Tasks,  Task Completion %  and  Assigned Artist Email  are automatically computed by Airtable and cannot be directly updated. You cannot clear these, even with a  `replace`  call.

Automatic data conversion for update actions can be enabled via  `typecast`  parameter.  See  [create record](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:requests:create)  for details.

You can also include a single record object at the top level.  Click here to show an example.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Requests').update([
  {
    "id": "rec5GUAUiRWHGqLa0",
    "fields": {
      "Request Title": "October Election Coverage Graphics",
      "Description": "Requesting a set of infographics and lower-thirds for the upcoming October election night broadcast. Please include candidate headshots and polling da...",
      "Requester Name": "Jessica Lee",
      "Requester Email": "jessica.lee@newnewsnetworkbd62.com",
      "Priority": "High",
      "Status": "Queued",
      "Date Submitted": "2025-09-30",
      "Reference Images": [
        {
          "id": "attHlqDOCHYMNBD4q"
        }
      ],
      "Assigned Artist": [
        "recqnwmuGr9i8aO5M"
      ],
      "Production Tasks": [
        "recL88PRTg3RxCPrH"
      ],
      "Request Summary (AI)": {
        "state": "generated",
        "value": "Broadcast Graphics",
        "isStale": true
      },
      "Request Category (AI)": {
        "state": "generated",
        "value": "",
        "isStale": true
      }
    }
  },
  {
    "id": "recJy23ZNXo3EhmJ8",
    "fields": {
      "Request Title": "Podcast Episode Artwork: Climate Series",
      "Description": "Need custom cover art for the next episode in our climate change podcast series. Should reflect the episode's focus on renewable energy innovations.",
      "Requester Name": "Samir Patel",
      "Requester Email": "samir.patel@newnewsnetwork0945.com",
      "Priority": "Medium",
      "Status": "Assigned",
      "Date Submitted": "2025-09-28",
      "Reference Images": [
        {
          "id": "attXgLCVvLhx488xW"
        }
      ],
      "Assigned Artist": [
        "recxNmHrgugHrBRgF"
      ],
      "Production Tasks": [
        "recAt7KmdStAf5YrN"
      ],
      "Request Summary (AI)": {
        "state": "generated",
        "value": "Podcast Artwork",
        "isStale": true
      },
      "Request Category (AI)": {
        "state": "generated",
        "value": "",
        "isStale": true
      }
    }
  },
  {
    "id": "recuMDrBlUcyLxX4G",
    "fields": {
      "Request Title": "Breaking News Alert Animation",
      "Description": "Animated alert for breaking news segments. Quick turnaround required. Use brand colors and logo.",
      "Requester Name": "Tina Morales",
      "Requester Email": "tina.morales@newnewsnetwork03fa.com",
      "Priority": "High",
      "Status": "In Production",
      "Date Submitted": "2025-09-29",
      "Reference Images": [
        {
          "id": "attcqbfyQfEbxq5V3"
        }
      ],
      "Assigned Artist": [
        "recDpDikzIp7bmrhQ"
      ],
      "Production Tasks": [
        "rechUjMHp01Q0u5Bl"
      ],
      "Request Summary (AI)": {
        "state": "generated",
        "value": "Motion Graphics",
        "isStale": true
      },
      "Request Category (AI)": {
        "state": "generated",
        "value": "",
        "isStale": true
      }
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function(record) {
    console.log(record.get('Request Title'));
  });
});
```

#### OUTPUT

```
"October Election Coverage Graphics"
"Podcast Episode Artwork: Climate Series"
"Breaking News Alert Animation"
```

## Delete Requests records

To delete  Requests  records,  use the  `destroy`  method.  Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

The first parameter to  `destroy`  is an array of up to 10 record IDs to delete.

You can also  set the first parameter to a record ID  to delete a single record.  Click here to show an example.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Requests').destroy(['rec5GUAUiRWHGqLa0', 'recJy23ZNXo3EhmJ8'], function(err, deletedRecords) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Deleted', deletedRecords.length, 'records');
});
```

#### OUTPUT

```
Deleted 2 records
```

# PRODUCTION TASKS TABLE

The id for  Production Tasks  is  tblKeJpjeaX0sqm1F. Table ids and table names can be used interchangeably in API requests. Using table ids means table name changes do not require modifications to your API request.

## Fields

Each record in the  Production Tasks  table contains the following fields:

Field names and field ids can be used interchangeably. Using field ids means field name changes do not require modifications to your API request. We recommend using field ids over field names where possible, to reduce modifications to your API request if the user changes the field name later.

### FIELD NAME

### FIELD ID

### TYPE

### DESCRIPTION

Task Name

fldlaDsNXEBc303Ft

Text

string

A single line of text.

#### EXAMPLE VALUES

```
"Edit Interview Footage"
```

```
"Design Thumbnail Graphic"
```

```
"Write Social Media Copy"
```

```
"Sync Audio Tracks"
```

Description

fldGOPiee2fex6RoA

Long text

string

Multiple lines of text, which may contain "mention tokens", e.g.  
`<airtable:mention id="menE1i9oBaGX3DseR">@Alex</airtable:mention>`

#### EXAMPLE VALUES

```
"Trim and color-correct the interview with Dr. Lee for the health segment."
```

```
"Create a custom thumbnail for the 'Climate Change Special' video."
```

```
"Draft engaging social media posts to promote the 'Election Night Live' broadcast."
```

```
"Align and clean up audio for the 'Morning News Recap' podcast episode."
```

Assigned Artist

fldSKqgS689hijaT1

Link to another record

array of record IDs (strings)

Array of linked records IDs from the  Artists  table.

#### EXAMPLE VALUE

```
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]
```

Related Request

fld1csNV8QtzvP6BI

Link to another record

array of record IDs (strings)

Array of linked records IDs from the  Requests  table.

#### EXAMPLE VALUE

```
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]
```

Status

fldchDuhLbVp9GlNd

Single select

string

Selected option name.

When creating or updating records, if  the  choice string does not exactly match an existing option, the request will fail with an  `INVALID_MULTIPLE_CHOICE_OPTIONS`error unless the  `typecast`  parameter is enabled. If  `typecast`  is enabled, a new choice will be created if one does not exactly match.

#### POSSIBLE VALUES

```
[
    "Not Started",
    "In Progress",
    "Review",
    "Completed",
    "Blocked"
]
```

Due Date

fld5RPBfN3miXKllQ

Date

string (ISO 8601 formatted date)

UTC date, e.g. "2014-09-05".

#### EXAMPLE VALUES

```
"2025-10-01"
```

```
"2025-10-03"
```

```
"2025-09-29"
```

```
"2025-09-28"
```

Progress Photo

fldAL2tTGfJr2aNQG

Attachment

array of attachment objects

Each attachment object may contain the following properties. To see which fields are required or optional, please consult the relevant section:  [retrieve](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:retrieve),  [create](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:create),  [update](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:update), or  [delete](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:delete).  
  
Because this field is configured to show attachments in reversed order, the order of attachments in the app will be reversed compared to what you see here.  
  

id

string

unique attachment id

url

string

url, e.g. "https://v5.airtableusercontent.com/foo".  
  
Note: URLs returned will expire 2 hours after being returned from our API. If you want to persist the attachments, we recommend downloading them instead of saving the URL. See  [our support article](https://support.airtable.com/docs/airtable-attachment-url-behavior)  for more information.

filename

string

filename, e.g. "foo.jpg"

size

number

file size, in bytes

type

string

content type, e.g. "image/jpeg"

width

number

height

number

width/height, in pixels (these may be available if the attachment is an image)

thumbnails.small.url

string

thumbnails.large.url

string

url of small/large thumbnails (these may be available if the attachment is an image or document). See notes under  `url`  about the lifetime of these URLs.

thumbnails.small.width

number

thumbnails.small.height

number

thumbnails.large.width

number

thumbnails.large.height

number

width/height of small/large thumbnails, in pixels (these will be available if the corresponding thumbnail url is available)

#### EXAMPLE VALUES

```
[
    {
        "id": "attKvDF7YrMZXSCZ0",
        "width": 600,
        "height": 401,
        "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/kCvjSppWAyZ4njXxHov2qg/yQ-zAsj0V-xOy-uavSTm76s8cZel7YhtorE0Htr-gU7fxeQnbB7gg9zu9An40rJtQ3R8itGybE35c4vStpXgp9_Q37ggHE3b_iwCGgJFrEqQwqCaqB5s7oXFO1843MCG7-WgP0AjM2uanRNzcPmIXeQvhka4u28CRv5YD2nwK5o/WBV2awjAj6FjY3eL8bVH6gOwxolnL43YrKDZQW1F2Ow",
        "filename": "abstract_33.png",
        "size": 185579,
        "type": "image/png",
        "thumbnails": {
            "small": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/i8sD65YY-behWO2zITMcrw/NLx5ULjLlu7zkvdj2ZicgzstC-Shf_AjMzzKeRspvWiBA3WeOAl2qeaAe84RniQasmnJqktrwES2vQVRtlju-SJD_baxnDyFj_xRZHcpnQrK0aN-AlNQ-mENE-7jHSMfiLvNZMzYDP4MWyJkpwEmxA/BPCLwSJ1neMQ7lbh2JkRpY2QpwTcWq5kmhcQCQGq5AM",
                "width": 54,
                "height": 36
            },
            "large": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/sJ5bVyxRNm5wAfiPx9H9jA/fRRWzL-dKwwwqUoLvepsCmGsyE_00ygGyMt7VHk5HhVA-zaRW2_9syCH-bDbEM-O2NQpZbnMY8sAtMZ7gKbsgEnlfGcImZnNJLlCICewFy3bO6yyiX1P1syy_gEeCd7XT1OXuwVkvntimlY9QhpeLA/nqxnO9vFTZw7GqGLVKhFycjTOM-UDZ0jTKxdvLaLwsg",
                "width": 600,
                "height": 401
            },
            "full": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/e9lYWA5HjL-ybZUDhMAKwA/NrlukBPzYUezKoadI8icW0NMCFeGc6zA4GUHSCikT_TtS08Eizk5G7BV8eUD73fVFXW_gCYnFJhyl4rg7Jv2dmtDLWm5bzpj8x1XivkMI-ZzBC2WpH-skXLfZ8s3atJiuWOqr48Av8s4-nn1CkqtdA/lc_gL1wSYiVdamJO_2TE1ZK5EoBZoSnNyo9HGtskYNI",
                "width": 600,
                "height": 401
            }
        }
    }
]
```

```
[
    {
        "id": "attu8XQGgmCu6Yd4g",
        "width": 600,
        "height": 401,
        "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/mUSBNdzJpbO-__Xq7BS3Zg/0A9pkpkOcAPzkwiedbobWjnFX5PkxQd02u3zYVQ23YuiR2DeJMYFWtYPZ_VZP6xbemOvFABY66BO37-IeOCRn1hlBRl888DVEUJqPfaieJdowdA6CgSHncoBoa3DNr_rhuRUwGMWisn4SxdKbIN7CBm5maxuk4I2vHuBClv9Ao8/Scpu6Mei5KBke3TeBwp-tq0djZCLIOF81gqCOMGvnww",
        "filename": "abstract_11.png",
        "size": 351189,
        "type": "image/png",
        "thumbnails": {
            "small": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/EDT8jDst-b5aAhlfRu9MkQ/JRdCOSriNThXCgzeX3KzFI_uGiZqsj7uxAatDrsvVRabnXA6ccxuEitQm_514LbNOhmHGcQaF4_CN6Ka7gkuvF-0q_uslyZcnGIMLH4pFSpW8F0Rdd5IQiYKmcqaeEU-gzR5KCWJqXYDaLuOKPsQeQ/_JGXUC5C_xhm7jnb9KUjAnaDclZoW7Yir8eGNW5etvk",
                "width": 54,
                "height": 36
            },
            "large": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/qekGJXCQPBavmq5l8P2_AQ/mcpOJejYBJU-XWFBDBQC6P2cDVYY3tK_SDyFWh7IpVFx4g5hJYQCehzmxRR3BGrg3BARmyQrvGJGkZ2IZhK4cyeHLzs_FdXS0jGBeKGbEfTrPaDHMRwQiUjpL35yGGG_tUs135Zto2BTjjdWoomOsA/vktk9wqMOC8memikLk9PTCX9PQR6v0i0LkYpiNNzlAo",
                "width": 600,
                "height": 401
            },
            "full": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/IR5urorkcqXBdeaK977L7A/WLYi9Sbwb7K_aREws_lERuTSq9hyAdplPKXKMnBeCGNGOSweuKZWEoW0uD77_wdOMOAH0Z5Wa8S8xcrqufCWgx6X2mmBN3v2IUSmtMV3D0oAKAHd00J3QRuPA_HXskmIQ82UL7ZEvi90jd5__-qQpA/NjKqeaE1r3momd2pCt0XFTMBY6Ry2A8x_tgMJ1hS5dM",
                "width": 600,
                "height": 401
            }
        }
    }
]
```

Priority

fldlA1acNLh8KRdFA

Single select

string

Selected option name.

When creating or updating records, if  the  choice string does not exactly match an existing option, the request will fail with an  `INVALID_MULTIPLE_CHOICE_OPTIONS`error unless the  `typecast`  parameter is enabled. If  `typecast`  is enabled, a new choice will be created if one does not exactly match.

#### POSSIBLE VALUES

```
[
    "Low",
    "Medium",
    "High",
    "Urgent"
]
```

Time Spent (hrs)

fldTj3wAwKnt8yIdk

Number

number

A decimal number showing 2 decimal digits.  This field allows negative and positive numbers.

#### EXAMPLE VALUES

```
2.50
```

```
0.00
```

```
3.00
```

```
1.25
```

Completion Date

fldL12DlTyTdKiPTh

Date

string (ISO 8601 formatted date)

UTC date, e.g. "2014-09-05".

#### EXAMPLE VALUES

```
"2025-09-29"
```

```
"2025-09-28"
```

Days Overdue

fldIGL6Bhjp9SO7VT

Formula

number, string, array of numbers or strings

Computed value:  IF(AND(Status  != 'Completed',  Due Date), DATETIME_DIFF(TODAY(),  Due Date, 'days'), BLANK()).

#### EXAMPLE VALUES

```
0
```

```
-2
```

```
2
```

Is Late?

fldizBCEQvatKJQlq

Formula

number, string, array of numbers or strings

Computed value:  IF(AND(Status  != 'Completed',  Due Date  < TODAY()), 'Yes', 'No').

#### EXAMPLE VALUES

```
"\"No\""
```

```
"\"No\""
```

```
"\"Yes\""
```

```
"\"No\""
```

Related Request Priority

fldeXMJlkPuMl4F6t

Lookup

array of numbers, strings, booleans, or objects

Array of  Priority  fields in linked  Requests  records.

#### EXAMPLE VALUES

```
[
    "High"
]
```

```
[
    "Medium"
]
```

```
[
    "High"
]
```

```
[
    "Low"
]
```

Related Request Title

fldlXMT02g6P69HJW

Lookup

array of numbers, strings, booleans, or objects

Array of  Request Title  fields in linked  Requests  records.

#### EXAMPLE VALUES

```
[
    "October Election Coverage Graphics"
]
```

```
[
    "Podcast Episode Artwork: Climate Series"
]
```

```
[
    "Breaking News Alert Animation"
]
```

```
[
    "Weekly Social Media Recap Video"
]
```

Assigned Artist Email

fld66cMixV87SQ7WF

Lookup

array of numbers, strings, booleans, or objects

Array of  Email  fields in linked  Artists  records.

#### EXAMPLE VALUES

```
[
    "jordan.kim@newnewsnetwork3ca7.com"
]
```

```
[
    "ava.patel@newnewsnetwork3863.com"
]
```

```
[
    "marcus.lee@newnewsnetwork9afe.com"
]
```

```
[
    "sofia.martinez@newnewsnetwork45b1.com"
]
```

Task Summary (AI)

fldyLevKUND5fheDB

Suggested Next Step (AI)

fldN2WZQD9gUu7uAM

## List Production Tasks records

To list records in  Production Tasks, use the  `select`  method.

`select`  returns a query object. To fetch the records matching that query, use the  `eachPage`  or  `firstPage`  method of the query object.

Returned records do not include any fields with "empty" values, e.g.  `""`,  `[]`, or  `false`.

**Note:**  Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to  `/v0/{baseId}/{tableIdOrName}/listRecords`  while passing the parameters within the body of the request instead of the query parameters. See  [our support article on this](https://support.airtable.com/docs/enforcement-of-url-length-limit-for-public-api-requests)  for more information.

You can use the following parameters to filter, sort, and format the results:

fields`array of strings`optional

Only data for fields whose names are in this list will be included in the result. If you don't need every field, you can use this parameter to reduce the amount of data transferred.

For example, to only return data from  Task Name  and  Description,  pass in:

fields: ["Task Name", "Description"]

You can also perform the same action with field ids (they can be found in the fields section):

fields: ["fldlaDsNXEBc303Ft", "fldGOPiee2fex6RoA"]

filterByFormula`string`optional

A  [formula](https://support.airtable.com/docs/formula-field-reference)  used to filter records. The formula will be evaluated for each record, and if the result is not  `0`,  `false`,  `""`,  `NaN`,`[]`, or  `#Error!`  the record will be included in the response. We recommend testing your formula in the Formula field UI before using it in your API request.

If combined with the  `view`  parameter, only records in that view which satisfy the formula will be returned.

The formula must be encoded first before passing it as a value. You can use  [this tool](https://codepen.io/airtable/full/MeXqOg)  to not only encode the formula but also create the entire url you need. For example, to only include records where  Task Name  isn't empty, pass in  `NOT({Task Name} = '')`  as a parameter like this:

filterByFormula: "NOT({Task Name} = '')"

  

**Note:**  Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to`/v0/{baseId}/{tableIdOrName}/listRecords`  while passing the parameters within the body of the request instead of the query parameters. See  [our support article on this](https://support.airtable.com/docs/enforcement-of-url-length-limit-for-public-api-requests)  for more information.

maxRecords`number`optional

The maximum total number of records that will be returned in your requests. If this value is larger than  `pageSize`  (which is 100 by default), you may have to load multiple pages to reach this total. See the Pagination section below for more.

pageSize`number`optional

The number of records returned in each request. Must be less than or equal to 100. Default is 100. See the Pagination section below for more.

sort`array of objects`optional

A list of sort objects that specifies how the records will be ordered. Each sort object must have a  `field`  key specifying the name of the field to sort on, and an optional  `direction`  key that is either  `"asc"`  or  `"desc"`. The default direction is  `"asc"`.

The  `sort`  parameter overrides the sorting of the view specified in the  `view`  parameter. If neither the  `sort`  nor the  `view`parameter is included, the order of records is arbitrary.

For example, to sort records by  Task Name  in descending order, send these two query parameters:

sort%5B0%5D%5Bfield%5D=Task%20Name

sort%5B0%5D%5Bdirection%5D=desc

For example, to sort records by  Task Name  in descending order, pass in:

[{field: "Task Name", direction: "desc"}]

view`string`optional

The name or ID of a view in the  Production Tasks  table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view unless the  `sort`  parameter is included, which overrides that order. Fields hidden in this view will be returned in the results. To only return a subset of fields, use the  `fields`  parameter.

cellFormat`string`optional

The format that should be used for cell values. Supported values are:

`json`: cells will be formatted as JSON, depending on the field type.

`string`: cells will be formatted as user-facing strings, regardless of the field type. The  `timeZone`  and  `userLocale`parameters are required when using  `string`  as the  `cellFormat`.

**Note:**  You should not rely on the format of these strings, as it is subject to change.

The default is  `json`.

timeZone`string`optional

The  [time zone](https://support.airtable.com/docs/supported-timezones-for-set-timezone)  that should be used to format dates when using  `string`  as the  `cellFormat`. This parameter is required when using  `string`  as the  `cellFormat`.

userLocale`string`optional

The  [user locale](https://support.airtable.com/docs/supported-locale-modifiers-for-set-locale)  that should be used to format dates when using  `string`  as the  `cellFormat`. This parameter is required when using  `string`  as the  `cellFormat`.

returnFieldsByFieldId`boolean`optional

An optional boolean value that lets you return field objects where the key is the field id.

This defaults to  `false`, which returns field objects where the key is the field name.

recordMetadata`array of strings`optional

An optional field that, if includes  `commentCount`, adds a  `commentCount`  read only property on each record returned.

### Pagination

The server returns one page of records at a time. Each page will contain  `pageSize`  records, which is 100 by default.

To fetch the next page of records, call  `fetchNextPage`.

Pagination will stop when you've reached the end of your table. If the  `maxRecords`  parameter is passed, pagination will stop once you've reached this maximum.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Production Tasks').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Task Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

```

#### OUTPUT

```
Retrieved Edit Interview Footage

```

```
Retrieved Design Thumbnail Graphic

```

```
Retrieved Write Social Media Copy

```

#### FETCH FIRST PAGE

```
// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
base('Production Tasks').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Task Name'));
    });
});

```

#### FETCH ADDITIONAL RECORD METADATA

```
// If you want to fetch the number of comments for each record,
// include the `recordMetadata` param.
base('Production Tasks').select({
    recordMetadata: ['commentCount']
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved a record with', record.commentCount, 'comments');
    });
});

```

Iteration may timeout due to client inactivity or server restarts. In that case, the client will receive a 422 response with error message  `LIST_RECORDS_ITERATOR_NOT_AVAILABLE`. It may then restart iteration from the beginning.

## Retrieve a Production Tasks record

To retrieve an existing record in  Production Tasks  table, use the  `find`  method.

Any "empty" fields (e.g.  `""`,  `[]`, or  `false`) in the record will not be returned.

In  [attachment objects](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:fields)  included in the retrieved record (Progress Photo), only  `id`,  `url`, and  `filename`  are always returned. Other attachment properties may not be included. Note: Attachment URLs returned will expire 2 hours after being returned from our API. If you want to persist the attachments, we recommend downloading them instead of saving the URL. See  [our support article](https://support.airtable.com/docs/airtable-attachment-url-behavior)  for more information.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Production Tasks').find('recL88PRTg3RxCPrH', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});

```

#### OUTPUT

```
Retrieved recL88PRTg3RxCPrH
```

## Create Production Tasks records

To create new records,  use the  `create`  method.  Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

The first argument should be  an array of up to 10 record objects. Each of these objects should have one key whose value is an inner object containing your record's cell values, keyed by either field name or field id.

Returns an array of record objects created if the call succeeded, including record IDs which will uniquely identify the records within  Content Calendar.

To create new attachments in  Progress Photo, set the field value to an  [array of attachment objects](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:fields). When creating an attachment,  `url`  is required, and  `filename`  is optional. Airtable will download the file at the given  `url`  and keep its own copy of it. All other attachment object properties will be generated server-side soon afterward.  
  
Note that in most cases the API does not currently return an error code for failed attachment object creation given attachment uploading happens in an asynchronous manner, such cases will manifest with the attachment object either being cleared from the cell or persisted with generated URLs that return error responses when queried. If the same attachment URL fails to upload multiple times in a short time interval then * the API may return an ATTACHMENTS_FAILED_UPLOADING error code in the details field of the response and the attachment object will * be cleared from the cell synchronously.  
  
We also require URLs used to upload have the https:// or http:// protocol (Note: http:// support will be removed in the near future), have a limit of 3 max redirects, and a file size limit of 1GB. In addition, URLs must be publicly accessible, in cases where cookie authentication or logging in to access the file is required, the login page HTML will be downloaded instead of the file.  
  
Attachment URLs returned will expire 2 hours after being returned from our API. If you want to persist the attachments, we recommend downloading them instead of saving the URL.  
  
If too many attachments are uploaded within a short period of time, the server may return a partial failure on record creation with an "Attachment Upload Rate Too High" error. See  [our support article](https://support.airtable.com/docs/airtable-attachment-url-behavior)  for more information.

Values for  Days Overdue,  Is Late?,  Related Request Priority,  Related Request Title  and  Assigned Artist Email  are automatically computed by Airtable and cannot be directly created.

The Airtable API will perform best-effort automatic data conversion from string values if the  `typecast`  parameter is passed  in (click to show example).  Automatic conversion is disabled by default to ensure data integrity, but it may be helpful for integrating with 3rd party data sources.

You can also include a single record object at the top level.  Click here to show an example.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Production Tasks').create([
  {
    "fields": {
      "Task Name": "Edit Interview Footage",
      "Description": "Trim and color-correct the interview with Dr. Lee for the health segment.",
      "Assigned Artist": [
        "recqnwmuGr9i8aO5M"
      ],
      "Related Request": [
        "rec5GUAUiRWHGqLa0"
      ],
      "Status": "In Progress",
      "Due Date": "2025-10-01",
      "Progress Photo": [
        {
          "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/kCvjSppWAyZ4njXxHov2qg/yQ-zAsj0V-xOy-uavSTm76s8cZel7YhtorE0Htr-gU7fxeQnbB7gg9zu9An40rJtQ3R8itGybE35c4vStpXgp9_Q37ggHE3b_iwCGgJFrEqQwqCaqB5s7oXFO1843MCG7-WgP0AjM2uanRNzcPmIXeQvhka4u28CRv5YD2nwK5o/WBV2awjAj6FjY3eL8bVH6gOwxolnL43YrKDZQW1F2Ow"
        }
      ],
      "Priority": "High",
      "Time Spent (hrs)": 2.5,
      "Task Summary (AI)": {
        "state": "generated",
        "value": "Editing of interview footage is underway, focusing on color correction and trimming for clarity.",
        "isStale": true
      },
      "Suggested Next Step (AI)": {
        "state": "generated",
        "value": "Next, review the edited footage with the producer and make any final adjustments.",
        "isStale": true
      }
    }
  },
  {
    "fields": {
      "Task Name": "Design Thumbnail Graphic",
      "Description": "Create a custom thumbnail for the 'Climate Change Special' video.",
      "Assigned Artist": [
        "recxNmHrgugHrBRgF"
      ],
      "Related Request": [
        "recJy23ZNXo3EhmJ8"
      ],
      "Status": "Not Started",
      "Due Date": "2025-10-03",
      "Progress Photo": [
        {
          "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/mUSBNdzJpbO-__Xq7BS3Zg/0A9pkpkOcAPzkwiedbobWjnFX5PkxQd02u3zYVQ23YuiR2DeJMYFWtYPZ_VZP6xbemOvFABY66BO37-IeOCRn1hlBRl888DVEUJqPfaieJdowdA6CgSHncoBoa3DNr_rhuRUwGMWisn4SxdKbIN7CBm5maxuk4I2vHuBClv9Ao8/Scpu6Mei5KBke3TeBwp-tq0djZCLIOF81gqCOMGvnww"
        }
      ],
      "Priority": "Medium",
      "Time Spent (hrs)": 0,
      "Task Summary (AI)": {
        "state": "generated",
        "value": "Thumbnail graphic design is pending, awaiting initial creative direction.",
        "isStale": true
      },
      "Suggested Next Step (AI)": {
        "state": "generated",
        "value": "Begin drafting thumbnail concepts and share with the team for feedback.",
        "isStale": true
      }
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
```

#### OUTPUT

```
recL88PRTg3RxCPrH
recAt7KmdStAf5YrN
```

## Update  Production Tasks records

To update  Production Tasks  records,  use the  `update`  or  `replace`  method. An  `update`  will only update the fields you include. Fields not included will be unchanged.  A  `replace`will perform a destructive update and clear all unincluded cell values.  A  `replace`  call on  Production Tasks  records will always fail.  The example at the right uses the  non-destructive  `update`  method.  Click here to show a  destructive  `replace`  call.

The first argument should be  an array of up to 10 record objects. Each of these objects should have an  `id`  property representing the record ID and a  `fields`  property which contains all of your record's cell values by field name or field id for all of your record's cell values by  field name.

To add attachments to  Progress Photo, add new  [attachment objects](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:fields)  to the existing array. Be sure to include all existing attachment objects that you wish to retain, to keep preexisting attachments providing  `id`  is required (which can be retrieved using the  [retrieve](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:retrieve)  endpoint), other fields are ignored. For the new attachments being added,  `url`  is required, and  `filename`  is optional. To remove attachments, include the existing array of attachment objects, excluding any that you wish to remove.  
  
Note that in most cases the API does not currently return an error code for failed attachment object creation given attachment uploading happens in an asynchronous manner, such cases will manifest with the attachment object either being cleared from the cell or persisted with generated URLs that return error responses when queried. If the same attachment URL fails to upload multiple times in a short time interval then * the API may return an ATTACHMENTS_FAILED_UPLOADING error code in the details field of the response and the attachment object will * be cleared from the cell synchronously.  
  
We also require URLs used to upload have the https:// or http:// protocol (Note: http:// support will be removed in the near future), have a limit of 3 max redirects, and a file size limit of 1GB. In addition, URLs must be publicly accessible, in cases where cookie authentication or logging in to access the file is required, the login page HTML will be downloaded instead of the file.  
  
If too many attachments are uploaded within a short period of time, the server may return a partial failure on record creation with an "Attachment Upload Rate Too High" error.

To link to new records in  Assigned Artist  and  Related Request, add new linked record IDs to the existing array. Be sure to include all existing linked record IDs that you wish to retain. To unlink records, include the existing array of record IDs, excluding any that you wish to unlink.

Description  may contain "mention tokens". A  _mention token_  corresponds to a "@mention" in Airtable's user interface; here in the API it will look like  `<airtable:mention id="menE1i9oBaGX3DseR">@Alex</airtable:mention>`. Mention tokens cannot be created via this API and should be left intact (or wholly removed) when updating long text fields.

Values for  Days Overdue,  Is Late?,  Related Request Priority,  Related Request Title  and  Assigned Artist Email  are automatically computed by Airtable and cannot be directly updated. You cannot clear these, even with a  `replace`  call.

Automatic data conversion for update actions can be enabled via  `typecast`  parameter.  See  [create record](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:production%20tasks:create)  for details.

You can also include a single record object at the top level.  Click here to show an example.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Production Tasks').update([
  {
    "id": "recL88PRTg3RxCPrH",
    "fields": {
      "Task Name": "Edit Interview Footage",
      "Description": "Trim and color-correct the interview with Dr. Lee for the health segment.",
      "Assigned Artist": [
        "recqnwmuGr9i8aO5M"
      ],
      "Related Request": [
        "rec5GUAUiRWHGqLa0"
      ],
      "Status": "In Progress",
      "Due Date": "2025-10-01",
      "Progress Photo": [
        {
          "id": "attKvDF7YrMZXSCZ0"
        }
      ],
      "Priority": "High",
      "Time Spent (hrs)": 2.5,
      "Task Summary (AI)": {
        "state": "generated",
        "value": "Editing of interview footage is underway, focusing on color correction and trimming for clarity.",
        "isStale": true
      },
      "Suggested Next Step (AI)": {
        "state": "generated",
        "value": "Next, review the edited footage with the producer and make any final adjustments.",
        "isStale": true
      }
    }
  },
  {
    "id": "recAt7KmdStAf5YrN",
    "fields": {
      "Task Name": "Design Thumbnail Graphic",
      "Description": "Create a custom thumbnail for the 'Climate Change Special' video.",
      "Assigned Artist": [
        "recxNmHrgugHrBRgF"
      ],
      "Related Request": [
        "recJy23ZNXo3EhmJ8"
      ],
      "Status": "Not Started",
      "Due Date": "2025-10-03",
      "Progress Photo": [
        {
          "id": "attu8XQGgmCu6Yd4g"
        }
      ],
      "Priority": "Medium",
      "Time Spent (hrs)": 0,
      "Task Summary (AI)": {
        "state": "generated",
        "value": "Thumbnail graphic design is pending, awaiting initial creative direction.",
        "isStale": true
      },
      "Suggested Next Step (AI)": {
        "state": "generated",
        "value": "Begin drafting thumbnail concepts and share with the team for feedback.",
        "isStale": true
      }
    }
  },
  {
    "id": "rechUjMHp01Q0u5Bl",
    "fields": {
      "Task Name": "Write Social Media Copy",
      "Description": "Draft engaging social media posts to promote the 'Election Night Live' broadcast.",
      "Assigned Artist": [
        "recDpDikzIp7bmrhQ"
      ],
      "Related Request": [
        "recuMDrBlUcyLxX4G"
      ],
      "Status": "Review",
      "Due Date": "2025-09-29",
      "Progress Photo": [
        {
          "id": "attIg91rugrOJLLSB"
        }
      ],
      "Priority": "Urgent",
      "Time Spent (hrs)": 3,
      "Completion Date": "2025-09-29",
      "Task Summary (AI)": {
        "state": "generated",
        "value": "Incorporate supervisor feedback and schedule posts for publishing.",
        "isStale": true
      },
      "Suggested Next Step (AI)": {
        "state": "generated",
        "value": "",
        "isStale": true
      }
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function(record) {
    console.log(record.get('Task Name'));
  });
});
```

#### OUTPUT

```
"Edit Interview Footage"
"Design Thumbnail Graphic"
"Write Social Media Copy"
```

## Delete Production Tasks records

To delete  Production Tasks  records,  use the  `destroy`  method.  Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

The first parameter to  `destroy`  is an array of up to 10 record IDs to delete.

You can also  set the first parameter to a record ID  to delete a single record.  Click here to show an example.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Production Tasks').destroy(['recL88PRTg3RxCPrH', 'recAt7KmdStAf5YrN'], function(err, deletedRecords) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Deleted', deletedRecords.length, 'records');
});
```

#### OUTPUT

```
Deleted 2 records
```

# ARTISTS TABLE

The id for  Artists  is  tblZmLjKLxObfK9MR. Table ids and table names can be used interchangeably in API requests. Using table ids means table name changes do not require modifications to your API request.

## Fields

Each record in the  Artists  table contains the following fields:

Field names and field ids can be used interchangeably. Using field ids means field name changes do not require modifications to your API request. We recommend using field ids over field names where possible, to reduce modifications to your API request if the user changes the field name later.

### FIELD NAME

### FIELD ID

### TYPE

### DESCRIPTION

Artist Name

fld4bXhAXQ028hRJQ

Text

string

A single line of text.

#### EXAMPLE VALUES

```
"Jordan Kim"
```

```
"Ava Patel"
```

```
"Marcus Lee"
```

```
"Sofia Martinez"
```

```
"Ethan Chen"
```

Profile Photo

fld3ACbvn9E6mRjbW

Attachment

array of attachment objects

Each attachment object may contain the following properties. To see which fields are required or optional, please consult the relevant section:  [retrieve](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:artists:retrieve),  [create](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:artists:create),  [update](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:artists:update), or  [delete](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:artists:delete).  
  
Because this field is configured to show attachments in reversed order, the order of attachments in the app will be reversed compared to what you see here.  
  

id

string

unique attachment id

url

string

url, e.g. "https://v5.airtableusercontent.com/foo".  
  
Note: URLs returned will expire 2 hours after being returned from our API. If you want to persist the attachments, we recommend downloading them instead of saving the URL. See  [our support article](https://support.airtable.com/docs/airtable-attachment-url-behavior)  for more information.

filename

string

filename, e.g. "foo.jpg"

size

number

file size, in bytes

type

string

content type, e.g. "image/jpeg"

width

number

height

number

width/height, in pixels (these may be available if the attachment is an image)

thumbnails.small.url

string

thumbnails.large.url

string

url of small/large thumbnails (these may be available if the attachment is an image or document). See notes under  `url`  about the lifetime of these URLs.

thumbnails.small.width

number

thumbnails.small.height

number

thumbnails.large.width

number

thumbnails.large.height

number

width/height of small/large thumbnails, in pixels (these will be available if the corresponding thumbnail url is available)

#### EXAMPLE VALUES

```
[
    {
        "id": "attUx7XKe7adgPWq1",
        "width": 600,
        "height": 401,
        "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/UOm5GUX1Of-yu9UVaW0R_g/H_hcdkKGCdmc7aTc1kNtetLRvAA-W2yRJbMukCyXz3rRnvhWsBL_w3998VsoMR5EvM8dk1EIhWVcPlqXOxWnTLh6KjNJVzErA2-YbJhs23OOgrKFcR4KwRyzFl2tQMHSaOtCCutnyj8jvfQK4tKsv3_osP3EL2Gnu3O_PGW-GlA/vOfIAHYsplsQZn5vpNDLhox74J5gSURMbVGxDzY4Xaw",
        "filename": "abstract_2.png",
        "size": 354054,
        "type": "image/png",
        "thumbnails": {
            "small": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/vkdAfwNTrVDVKSGsIDXaRA/D0btvh-SHymohFXA5UeSiCPCnDr2d7oJFZ7f85eWHT9Upr9PCfmHlM3wjtsSNEiqFCsACKc3Wb7bn-WudTw9nC0qMsmiW59XFDIvRmDr8cc69hiFihHWMcbaBJYecP225L2FvAd41W4Y0t88JAVHDA/zLJKwm0-CFkNvBBwJTX72UHeC_TJ3P3Y9brwqred2Z4",
                "width": 54,
                "height": 36
            },
            "large": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/QKWEfoLN5r-vPuF5QZa9OQ/PEZug0bSXa87J_lFhEzxr5fWUTmaY_jObGJkDn3S7urFTzsjpgvOc6w9KkzK6IhAW9BSH-kqJPms98fOqrFhexGq86pwZ94HgfkzGlLpaJjrN2vVz2HN0fQYf8cbCRBC61R6Y0ziDCLpPAyhvvJWeg/-Isqy7eGhysZ8nC46IyQa70QfHc7_eAu-PETf5nBPIA",
                "width": 600,
                "height": 401
            },
            "full": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/vyF_hk88OvNgz00lhzPLvw/hNrOuWFJ3r0n042Won1Qxs9oEX_WOfagRIIH9ueSFBWvP6YFoE8jne7Bq1F6ypRLgrM0EJSCMVe-UQff5KNyDunpG-IiYcUO5rlrtIJ4jJBqKtGQM6o6c69Dy8YN7rodC7i67M9A1MnecxVQi7Um3A/snsDAJ90vhaygAIwHq_r-G-bN8etgzbeQs3LTkfvJtE",
                "width": 600,
                "height": 401
            }
        }
    }
]
```

```
[
    {
        "id": "atteKAHf38bYlgluy",
        "width": 600,
        "height": 401,
        "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/A7ZoR_sYfPX-rEg5gjtwBQ/zQuHmOpfsRJqkWbKzIwlJz9csiE1wkKrO8J1nYDS5VJgUmxtKxxlKMm6MqQL6oCqChrGjJl95WkKe6vw9-Nsxs437E3eK7ekMMFGMc9FYEY2rEdClfxK8ZYmFi-CEAM26i0j9vwNAVOM9jPw6ayVq7fw2ab3lyLrbUiQAYzlOHU/3yj1kiQ199D1wVJST_AGCeHscNKguOnNCXTUoC1sT4o",
        "filename": "abstract_22.png",
        "size": 61895,
        "type": "image/png",
        "thumbnails": {
            "small": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/4OqYeLK2tvSCgOA-YwIx3w/W3-1TYtkEGvErMr3pqfe5OiVWZyEaLo2aDv6CkYySMg4Ib1XvLhA4r1EkWdpf4XQaEhZZs99XFM3IC2d-Tw8ce19FHHj1Uuyx6UCYvRG-LAWOeofJJsHlKqZOu9_GyMMTZhQjVMHrMbbHsbHHjNQ_Q/u3tNKC65PG4oN3jgD8VTFteByYgxu7fBvv4sjil76Oc",
                "width": 54,
                "height": 36
            },
            "large": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/ClgalfMrdjG5oHcP5QwV6w/RnF18iaZL6fAOz_nQSp99-jNKZx6Rb600uIkhjSjZFAJiwom8FNAHzxu3hcY8j_odh0LpTK-DSQ7y2kb3tvSgU0xhs2rezSB7MXKUgt6jHshxQblnmngNw3fMcoInOCuNFOvMAJUSa1zkhF5z6RlsQ/dUvv-RwqjnVDDhhail-2D-25rOCkBRfPQsaSx_0KUkI",
                "width": 600,
                "height": 401
            },
            "full": {
                "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/lCgMie5cCnRfWJ34T6QAbw/-vm_V1WTVqCGllIBC1lhW-N6QdnaSLMXFpDZsweHjxYKWiBFmkGazH3Zg-oM6D8H7bWqZpRaOjJmG916uTEtbRVapQ6D1mygbRLHqvGjryLKOkyf3JP1p2w46_t8R9BAIf59MB8T-o2NjdSVLR7HMQ/VMMImeGNN_z-ksNLc2ud2uwzTM3ksx7WJ6KxumPT7KM",
                "width": 600,
                "height": 401
            }
        }
    }
]
```

Role

fldM92oGjOpxcvUcX

Single select

string

Selected option name.

When creating or updating records, if  the  choice string does not exactly match an existing option, the request will fail with an  `INVALID_MULTIPLE_CHOICE_OPTIONS`error unless the  `typecast`  parameter is enabled. If  `typecast`  is enabled, a new choice will be created if one does not exactly match.

#### POSSIBLE VALUES

```
[
    "Video Editor",
    "Graphic Designer",
    "Writer",
    "Producer",
    "Animator",
    "Photographer",
    "Other"
]
```

Email

fld6RAhUrJWDzkBaW

Text

string

A single line of text.

#### EXAMPLE VALUES

```
"jordan.kim@newnewsnetwork3ca7.com"
```

```
"ava.patel@newnewsnetwork3863.com"
```

```
"marcus.lee@newnewsnetwork9afe.com"
```

```
"sofia.martinez@newnewsnetwork45b1.com"
```

```
"ethan.chen@newnewsnetwork584f.com"
```

Phone Number

fldbeoen9bYZn9UOo

Text

string

A single line of text.

#### EXAMPLE VALUES

```
"555-0123"
```

```
"555-0456"
```

```
"555-0789"
```

```
"555-0111"
```

```
"555-0222"
```

Status

flduFAo9qqvXTYbiX

Single select

string

Selected option name.

When creating or updating records, if  the  choice string does not exactly match an existing option, the request will fail with an  `INVALID_MULTIPLE_CHOICE_OPTIONS`error unless the  `typecast`  parameter is enabled. If  `typecast`  is enabled, a new choice will be created if one does not exactly match.

#### POSSIBLE VALUES

```
[
    "Active",
    "Inactive"
]
```

Assigned Requests

fldSttwq9p5uFNYGG

Link to another record

array of record IDs (strings)

Array of linked records IDs from the  Requests  table.

#### EXAMPLE VALUE

```
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]
```

Assigned Production Tasks

fldGHmyVQEnvq4dbN

Link to another record

array of record IDs (strings)

Array of linked records IDs from the  Production Tasks  table.

#### EXAMPLE VALUE

```
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]
```

# Active Requests

fldGBZBSn1oe7eVbG

Rollup

number or string

Computed value: COUNTA(values) for  Status  in  Requests.

#### EXAMPLE VALUES

```
1
```

```
1
```

```
1
```

```
1
```

```
0
```

# Open Production Tasks

fldRf2BquIieJUIal

Rollup

number or string

Computed value: COUNTA(values) for  Status  in  Production Tasks.

#### EXAMPLE VALUES

```
1
```

```
1
```

```
1
```

```
1
```

```
0
```

Total Hours Logged (Tasks)

fldhLZaQ2VtUiDxQD

Rollup

number or string

Computed value: SUM(values) for  Time Spent (hrs)  in  Production Tasks.

#### EXAMPLE VALUES

```
2.5
```

```
0
```

```
3
```

```
1.25
```

```
0
```

Avg Task Completion Time (hrs)

fld7VRfeN8MdSyq5K

Rollup

number or string

Computed value: AVERAGE(values) for  Time Spent (hrs)  in  Production Tasks.

#### EXAMPLE VALUES

```
2.5
```

```
0
```

```
3
```

```
1.25
```

```
{
    "specialValue": "NaN"
}
```

% Tasks Completed

fldfN6KOZy5QZe1JL

Formula

number, string, array of numbers or strings

Computed value:  BLANK().

#### EXAMPLE VALUES

To see example values, try adding some data to  Artists.

Current Workload Summary

fldwPVYwrO2U14lDG

Skill/Role Fit Suggestions

fldyAWZl4w4lK4sBh

## List Artists records

To list records in  Artists, use the  `select`  method.

`select`  returns a query object. To fetch the records matching that query, use the  `eachPage`  or  `firstPage`  method of the query object.

Returned records do not include any fields with "empty" values, e.g.  `""`,  `[]`, or  `false`.

**Note:**  Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to  `/v0/{baseId}/{tableIdOrName}/listRecords`  while passing the parameters within the body of the request instead of the query parameters. See  [our support article on this](https://support.airtable.com/docs/enforcement-of-url-length-limit-for-public-api-requests)  for more information.

You can use the following parameters to filter, sort, and format the results:

fields`array of strings`optional

Only data for fields whose names are in this list will be included in the result. If you don't need every field, you can use this parameter to reduce the amount of data transferred.

For example, to only return data from  Artist Name  and  Profile Photo,  pass in:

fields: ["Artist Name", "Profile Photo"]

You can also perform the same action with field ids (they can be found in the fields section):

fields: ["fld4bXhAXQ028hRJQ", "fld3ACbvn9E6mRjbW"]

filterByFormula`string`optional

A  [formula](https://support.airtable.com/docs/formula-field-reference)  used to filter records. The formula will be evaluated for each record, and if the result is not  `0`,  `false`,  `""`,  `NaN`,`[]`, or  `#Error!`  the record will be included in the response. We recommend testing your formula in the Formula field UI before using it in your API request.

If combined with the  `view`  parameter, only records in that view which satisfy the formula will be returned.

The formula must be encoded first before passing it as a value. You can use  [this tool](https://codepen.io/airtable/full/MeXqOg)  to not only encode the formula but also create the entire url you need. For example, to only include records where  Artist Name  isn't empty, pass in  `NOT({Artist Name} = '')`  as a parameter like this:

filterByFormula: "NOT({Artist Name} = '')"

  

**Note:**  Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to`/v0/{baseId}/{tableIdOrName}/listRecords`  while passing the parameters within the body of the request instead of the query parameters. See  [our support article on this](https://support.airtable.com/docs/enforcement-of-url-length-limit-for-public-api-requests)  for more information.

maxRecords`number`optional

The maximum total number of records that will be returned in your requests. If this value is larger than  `pageSize`  (which is 100 by default), you may have to load multiple pages to reach this total. See the Pagination section below for more.

pageSize`number`optional

The number of records returned in each request. Must be less than or equal to 100. Default is 100. See the Pagination section below for more.

sort`array of objects`optional

A list of sort objects that specifies how the records will be ordered. Each sort object must have a  `field`  key specifying the name of the field to sort on, and an optional  `direction`  key that is either  `"asc"`  or  `"desc"`. The default direction is  `"asc"`.

The  `sort`  parameter overrides the sorting of the view specified in the  `view`  parameter. If neither the  `sort`  nor the  `view`parameter is included, the order of records is arbitrary.

For example, to sort records by  Artist Name  in descending order, send these two query parameters:

sort%5B0%5D%5Bfield%5D=Artist%20Name

sort%5B0%5D%5Bdirection%5D=desc

For example, to sort records by  Artist Name  in descending order, pass in:

[{field: "Artist Name", direction: "desc"}]

view`string`optional

The name or ID of a view in the  Artists  table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view unless the  `sort`  parameter is included, which overrides that order. Fields hidden in this view will be returned in the results. To only return a subset of fields, use the  `fields`  parameter.

cellFormat`string`optional

The format that should be used for cell values. Supported values are:

`json`: cells will be formatted as JSON, depending on the field type.

`string`: cells will be formatted as user-facing strings, regardless of the field type. The  `timeZone`  and  `userLocale`parameters are required when using  `string`  as the  `cellFormat`.

**Note:**  You should not rely on the format of these strings, as it is subject to change.

The default is  `json`.

timeZone`string`optional

The  [time zone](https://support.airtable.com/docs/supported-timezones-for-set-timezone)  that should be used to format dates when using  `string`  as the  `cellFormat`. This parameter is required when using  `string`  as the  `cellFormat`.

userLocale`string`optional

The  [user locale](https://support.airtable.com/docs/supported-locale-modifiers-for-set-locale)  that should be used to format dates when using  `string`  as the  `cellFormat`. This parameter is required when using  `string`  as the  `cellFormat`.

returnFieldsByFieldId`boolean`optional

An optional boolean value that lets you return field objects where the key is the field id.

This defaults to  `false`, which returns field objects where the key is the field name.

recordMetadata`array of strings`optional

An optional field that, if includes  `commentCount`, adds a  `commentCount`  read only property on each record returned.

### Pagination

The server returns one page of records at a time. Each page will contain  `pageSize`  records, which is 100 by default.

To fetch the next page of records, call  `fetchNextPage`.

Pagination will stop when you've reached the end of your table. If the  `maxRecords`  parameter is passed, pagination will stop once you've reached this maximum.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Artists').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Artist Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

```

#### OUTPUT

```
Retrieved Jordan Kim

```

```
Retrieved Ava Patel

```

```
Retrieved Marcus Lee

```

#### FETCH FIRST PAGE

```
// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
base('Artists').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Artist Name'));
    });
});

```

#### FETCH ADDITIONAL RECORD METADATA

```
// If you want to fetch the number of comments for each record,
// include the `recordMetadata` param.
base('Artists').select({
    recordMetadata: ['commentCount']
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved a record with', record.commentCount, 'comments');
    });
});

```

Iteration may timeout due to client inactivity or server restarts. In that case, the client will receive a 422 response with error message  `LIST_RECORDS_ITERATOR_NOT_AVAILABLE`. It may then restart iteration from the beginning.

## Retrieve a Artists record

To retrieve an existing record in  Artists  table, use the  `find`  method.

Any "empty" fields (e.g.  `""`,  `[]`, or  `false`) in the record will not be returned.

In  [attachment objects](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:artists:fields)  included in the retrieved record (Profile Photo), only  `id`,  `url`, and  `filename`  are always returned. Other attachment properties may not be included. Note: Attachment URLs returned will expire 2 hours after being returned from our API. If you want to persist the attachments, we recommend downloading them instead of saving the URL. See  [our support article](https://support.airtable.com/docs/airtable-attachment-url-behavior)  for more information.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Artists').find('recqnwmuGr9i8aO5M', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});

```

#### OUTPUT

```
Retrieved recqnwmuGr9i8aO5M
```

## Create Artists records

To create new records,  use the  `create`  method.  Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

The first argument should be  an array of up to 10 record objects. Each of these objects should have one key whose value is an inner object containing your record's cell values, keyed by either field name or field id.

Returns an array of record objects created if the call succeeded, including record IDs which will uniquely identify the records within  Content Calendar.

To create new attachments in  Profile Photo, set the field value to an  [array of attachment objects](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:artists:fields). When creating an attachment,  `url`  is required, and  `filename`  is optional. Airtable will download the file at the given  `url`  and keep its own copy of it. All other attachment object properties will be generated server-side soon afterward.  
  
Note that in most cases the API does not currently return an error code for failed attachment object creation given attachment uploading happens in an asynchronous manner, such cases will manifest with the attachment object either being cleared from the cell or persisted with generated URLs that return error responses when queried. If the same attachment URL fails to upload multiple times in a short time interval then * the API may return an ATTACHMENTS_FAILED_UPLOADING error code in the details field of the response and the attachment object will * be cleared from the cell synchronously.  
  
We also require URLs used to upload have the https:// or http:// protocol (Note: http:// support will be removed in the near future), have a limit of 3 max redirects, and a file size limit of 1GB. In addition, URLs must be publicly accessible, in cases where cookie authentication or logging in to access the file is required, the login page HTML will be downloaded instead of the file.  
  
Attachment URLs returned will expire 2 hours after being returned from our API. If you want to persist the attachments, we recommend downloading them instead of saving the URL.  
  
If too many attachments are uploaded within a short period of time, the server may return a partial failure on record creation with an "Attachment Upload Rate Too High" error. See  [our support article](https://support.airtable.com/docs/airtable-attachment-url-behavior)  for more information.

Values for  # Active Requests,  # Open Production Tasks,  Total Hours Logged (Tasks),  Avg Task Completion Time (hrs)  and  % Tasks Completed  are automatically computed by Airtable and cannot be directly created.

The Airtable API will perform best-effort automatic data conversion from string values if the  `typecast`  parameter is passed  in (click to show example).  Automatic conversion is disabled by default to ensure data integrity, but it may be helpful for integrating with 3rd party data sources.

You can also include a single record object at the top level.  Click here to show an example.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Artists').create([
  {
    "fields": {
      "Artist Name": "Jordan Kim",
      "Profile Photo": [
        {
          "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/UOm5GUX1Of-yu9UVaW0R_g/H_hcdkKGCdmc7aTc1kNtetLRvAA-W2yRJbMukCyXz3rRnvhWsBL_w3998VsoMR5EvM8dk1EIhWVcPlqXOxWnTLh6KjNJVzErA2-YbJhs23OOgrKFcR4KwRyzFl2tQMHSaOtCCutnyj8jvfQK4tKsv3_osP3EL2Gnu3O_PGW-GlA/vOfIAHYsplsQZn5vpNDLhox74J5gSURMbVGxDzY4Xaw"
        }
      ],
      "Role": "Video Editor",
      "Email": "jordan.kim@newnewsnetwork3ca7.com",
      "Phone Number": "555-0123",
      "Status": "Active",
      "Assigned Requests": [
        "rec5GUAUiRWHGqLa0"
      ],
      "Assigned Production Tasks": [
        "recL88PRTg3RxCPrH"
      ],
      "Current Workload Summary": {
        "state": "generated",
        "value": "Managing multiple video edits for upcoming segments. High workload, but on track.",
        "isStale": true
      },
      "Skill/Role Fit Suggestions": {
        "state": "generated",
        "value": "Strong fit for video-heavy projects; consider diversifying with graphic assignments.",
        "isStale": true
      }
    }
  },
  {
    "fields": {
      "Artist Name": "Ava Patel",
      "Profile Photo": [
        {
          "url": "https://v5.airtableusercontent.com/v3/u/45/45/1759356000000/A7ZoR_sYfPX-rEg5gjtwBQ/zQuHmOpfsRJqkWbKzIwlJz9csiE1wkKrO8J1nYDS5VJgUmxtKxxlKMm6MqQL6oCqChrGjJl95WkKe6vw9-Nsxs437E3eK7ekMMFGMc9FYEY2rEdClfxK8ZYmFi-CEAM26i0j9vwNAVOM9jPw6ayVq7fw2ab3lyLrbUiQAYzlOHU/3yj1kiQ199D1wVJST_AGCeHscNKguOnNCXTUoC1sT4o"
        }
      ],
      "Role": "Graphic Designer",
      "Email": "ava.patel@newnewsnetwork3863.com",
      "Phone Number": "555-0456",
      "Status": "Active",
      "Assigned Requests": [
        "recJy23ZNXo3EhmJ8"
      ],
      "Assigned Production Tasks": [
        "recAt7KmdStAf5YrN"
      ],
      "Current Workload Summary": {
        "state": "generated",
        "value": "Currently wrapping up infographics for October releases. Moderate workload.",
        "isStale": true
      },
      "Skill/Role Fit Suggestions": {
        "state": "generated",
        "value": "Excellent fit for design tasks; could assist with animation projects.",
        "isStale": true
      }
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
```

#### OUTPUT

```
recqnwmuGr9i8aO5M
recxNmHrgugHrBRgF
```

## Update  Artists records

To update  Artists  records,  use the  `update`  or  `replace`  method. An  `update`  will only update the fields you include. Fields not included will be unchanged.  A  `replace`  will perform a destructive update and clear all unincluded cell values.  A  `replace`  call on  Artists  records will always fail.  The example at the right uses the  non-destructive  `update`method.  Click here to show a  destructive  `replace`  call.

The first argument should be  an array of up to 10 record objects. Each of these objects should have an  `id`  property representing the record ID and a  `fields`  property which contains all of your record's cell values by field name or field id for all of your record's cell values by  field name.

To add attachments to  Profile Photo, add new  [attachment objects](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:artists:fields)  to the existing array. Be sure to include all existing attachment objects that you wish to retain, to keep preexisting attachments providing  `id`  is required (which can be retrieved using the  [retrieve](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:artists:retrieve)  endpoint), other fields are ignored. For the new attachments being added,  `url`  is required, and  `filename`  is optional. To remove attachments, include the existing array of attachment objects, excluding any that you wish to remove.  
  
Note that in most cases the API does not currently return an error code for failed attachment object creation given attachment uploading happens in an asynchronous manner, such cases will manifest with the attachment object either being cleared from the cell or persisted with generated URLs that return error responses when queried. If the same attachment URL fails to upload multiple times in a short time interval then * the API may return an ATTACHMENTS_FAILED_UPLOADING error code in the details field of the response and the attachment object will * be cleared from the cell synchronously.  
  
We also require URLs used to upload have the https:// or http:// protocol (Note: http:// support will be removed in the near future), have a limit of 3 max redirects, and a file size limit of 1GB. In addition, URLs must be publicly accessible, in cases where cookie authentication or logging in to access the file is required, the login page HTML will be downloaded instead of the file.  
  
If too many attachments are uploaded within a short period of time, the server may return a partial failure on record creation with an "Attachment Upload Rate Too High" error.

To link to new records in  Assigned Requests  and  Assigned Production Tasks, add new linked record IDs to the existing array. Be sure to include all existing linked record IDs that you wish to retain. To unlink records, include the existing array of record IDs, excluding any that you wish to unlink.

Values for  # Active Requests,  # Open Production Tasks,  Total Hours Logged (Tasks),  Avg Task Completion Time (hrs)  and  % Tasks Completed  are automatically computed by Airtable and cannot be directly updated. You cannot clear these, even with a  `replace`  call.

Automatic data conversion for update actions can be enabled via  `typecast`  parameter.  See  [create record](https://airtable.com/appV0xzl937ervf3A/api/docs#javascript/table:artists:create)  for details.

You can also include a single record object at the top level.  Click here to show an example.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Artists').update([
  {
    "id": "recqnwmuGr9i8aO5M",
    "fields": {
      "Artist Name": "Jordan Kim",
      "Profile Photo": [
        {
          "id": "attUx7XKe7adgPWq1"
        }
      ],
      "Role": "Video Editor",
      "Email": "jordan.kim@newnewsnetwork3ca7.com",
      "Phone Number": "555-0123",
      "Status": "Active",
      "Assigned Requests": [
        "rec5GUAUiRWHGqLa0"
      ],
      "Assigned Production Tasks": [
        "recL88PRTg3RxCPrH"
      ],
      "Current Workload Summary": {
        "state": "generated",
        "value": "Managing multiple video edits for upcoming segments. High workload, but on track.",
        "isStale": true
      },
      "Skill/Role Fit Suggestions": {
        "state": "generated",
        "value": "Strong fit for video-heavy projects; consider diversifying with graphic assignments.",
        "isStale": true
      }
    }
  },
  {
    "id": "recxNmHrgugHrBRgF",
    "fields": {
      "Artist Name": "Ava Patel",
      "Profile Photo": [
        {
          "id": "atteKAHf38bYlgluy"
        }
      ],
      "Role": "Graphic Designer",
      "Email": "ava.patel@newnewsnetwork3863.com",
      "Phone Number": "555-0456",
      "Status": "Active",
      "Assigned Requests": [
        "recJy23ZNXo3EhmJ8"
      ],
      "Assigned Production Tasks": [
        "recAt7KmdStAf5YrN"
      ],
      "Current Workload Summary": {
        "state": "generated",
        "value": "Currently wrapping up infographics for October releases. Moderate workload.",
        "isStale": true
      },
      "Skill/Role Fit Suggestions": {
        "state": "generated",
        "value": "Excellent fit for design tasks; could assist with animation projects.",
        "isStale": true
      }
    }
  },
  {
    "id": "recDpDikzIp7bmrhQ",
    "fields": {
      "Artist Name": "Marcus Lee",
      "Profile Photo": [
        {
          "id": "att9GhOpSM86H9bih"
        }
      ],
      "Role": "Writer",
      "Email": "marcus.lee@newnewsnetwork9afe.com",
      "Phone Number": "555-0789",
      "Status": "Active",
      "Assigned Requests": [
        "recuMDrBlUcyLxX4G"
      ],
      "Assigned Production Tasks": [
        "rechUjMHp01Q0u5Bl"
      ],
      "Current Workload Summary": {
        "state": "generated",
        "value": "Focused on feature article drafts. Light workload, available for new assignments.",
        "isStale": true
      },
      "Skill/Role Fit Suggestions": {
        "state": "generated",
        "value": "Ideal for urgent writing needs; consider pairing with multimedia editors.",
        "isStale": true
      }
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function(record) {
    console.log(record.get('Artist Name'));
  });
});
```

#### OUTPUT

```
"Jordan Kim"
"Ava Patel"
"Marcus Lee"
```

## Delete Artists records

To delete  Artists  records,  use the  `destroy`  method.  Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

The first parameter to  `destroy`  is an array of up to 10 record IDs to delete.

You can also  set the first parameter to a record ID  to delete a single record.  Click here to show an example.

#### CODE

```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appV0xzl937ervf3A');

base('Artists').destroy(['recqnwmuGr9i8aO5M', 'recxNmHrgugHrBRgF'], function(err, deletedRecords) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Deleted', deletedRecords.length, 'records');
});
```

#### OUTPUT

```
Deleted 2 records
```

# ERRORS

The  Content Calendar  API follows HTTP status code semantics. 2xx codes signify success, 4xx mostly represent user error, 5xx generally correspond to a server error. The error messages will return a JSON-encoded body that contains  `error`  and  `message`  fields. Those will provide specific error condition and human-readable message to identify what caused the error.

## Success code

`200`

OK

Request completed successfully.

## User error codes

These errors generally indicate a problem on the client side. If you are getting one of these, check your code and the request details.

`400`

Bad Request

The request encoding is invalid; the request can't be parsed as a valid JSON.

`401`

Unauthorized

Accessing a protected resource without authorization or with invalid credentials.

`402`

Payment Required

The account associated with the API key making requests hits a quota that can be increased by upgrading the Airtable account plan.

`403`

Forbidden

Accessing a protected resource with API credentials that don't have access to that resource.

`404`

Not Found

Route or resource is not found. This error is returned when the request hits an undefined route, or if the resource doesn't exist (e.g. has been deleted).

`413`

Request Entity Too Large

The request exceeded the maximum allowed payload size. You shouldn't encounter this under normal use.

`422`

Invalid Request

The request data is invalid. This includes most of the base-specific validations. You will receive a detailed error message and code pointing to the exact issue.

`429`

Too Many Requests

The API is limited to 5 requests per second per base. You will receive a 429 status code and a message "Rate limit exceeded. Please try again later" and will need to wait 30 seconds before subsequent requests will succeed. To learn more about rate limits, please visit our  [Rate Limits](https://airtable.com/developers/web/api/rate-limits)  guide.

## Server error codes

These errors generally represent an error on our side. In the event of a 5xx error code, detailed information about the error will be automatically recorded, and Airtable's developers will be notified.

`500`

Internal Server Error

The server encountered an unexpected condition.

`502`

Bad Gateway

Airtable's servers are restarting or an unexpected outage is in progress. You should generally not receive this error, and requests are safe to retry.

`503`

Service Unavailable

The server could not process your request in time. The server could be temporarily unavailable, or it could have timed out processing your request. You should retry the request with backoffs.
