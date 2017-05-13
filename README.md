# oneom-node

Node API for getting TV series/schedule/torrent info

## installation

```
npm i oneom
```

## API

<dl>
<dt><a href="#list">list</a> ⇒ <code>Promise</code></dt>
<dd><p>List Tv Shows</p>
</dd>
<dt><a href="#show">show</a> ⇒ <code>Promise</code></dt>
<dd><p>Get extended info about a show, by ID</p>
</dd>
<dt><a href="#episode">episode</a> ⇒ <code>Promise</code></dt>
<dd><p>Get extended info about an episode</p>
</dd>
<dt><a href="#search">search</a> ⇒ <code>Promise</code></dt>
<dd><p>Search for Tv show by title</p>
</dd>
<dt><a href="#fresh">fresh</a> ⇒ <code>Promise</code></dt>
<dd><p>Fresh eps with torrents</p>
</dd>
<dt><a href="#schedule">schedule</a> ⇒ <code>Promise</code></dt>
<dd><p>Get Tv Schedule for date</p>
</dd>
<dt><a href="#config">config</a> ⇒ <code>Promise</code></dt>
<dd><p>Get config data, like lang list, source, country and such</p>
</dd>
</dl>

<a name="list"></a>

## list ⇒ <code>Promise</code>
List Tv Shows

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| [offset] | <code>Number</code> | start page (default: 0) |
| [limit] | <code>Number</code> | page-size (default: 100) |

<a name="show"></a>

## show ⇒ <code>Promise</code>
Get extended info about a show, by ID

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | ID, as returned by `list()` |

<a name="episode"></a>

## episode ⇒ <code>Promise</code>
Get extended info about an episode

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | ID, as returned by `list()` or `show()` |

<a name="search"></a>

## search ⇒ <code>Promise</code>
Search for Tv show by title

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>String</code> | Tv show title to seaarch for |
| [field] | <code>String</code> | Field to search by: `title`, `network_id`, `country_id`, `genre_id`, `lang_id`, `people_id`, `character_id`, `tvrage_id`, `tvmaze_id`, `mdb_id`, `tvdb_id`, `status_id`, `runtime`, `start`, `end` (default: `title`) |
| [limit] | <code>Number</code> | Number of results to return (default: 5) |

<a name="fresh"></a>

## fresh ⇒ <code>Promise</code>
Fresh eps with torrents

**Kind**: global constant  
<a name="schedule"></a>

## schedule ⇒ <code>Promise</code>
Get Tv Schedule for date

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| [date] | <code>Date</code> | String (format: `YYYY-MM-DD`) or Date-object |

<a name="config"></a>

## config ⇒ <code>Promise</code>
Get config data, like lang list, source, country and such

**Kind**: global constant  
