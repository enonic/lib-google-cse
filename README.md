# Google Custom Search engine lib



## Releases and Compatibility

| App version | Required XP version | Download |
| ----------- | ------------------- | -------- |
| 1.0.0 | 6.6.0 |


## Usage


### Install lib-cse

Install lib-cse to the local maven repository.

    gradle install

Use the lib-cse in any project by adding it in the dependency.

    repositories {
        mavenLocal()
    }

After this, add the following dependency (where ``<version>`` is the actual version to use):

    dependencies {
        include "com.enonic:lib-gcs:<version>"
    }



### API-key and engine id

To be able to get search result from Google, you need an api-key and a search engine id from Google. The api-key is obtained by setting up an credention at Googles [API manager](https://console.developers.google.com), and enabling the "custom search API".

Get the search engine id by register an engine at Googles [custom search engine console](https://cse.google.com).

![Google Api manager as of 2. august 2016](doc/images/google-api-manager-4aug2016.png)



### Search


    var libGce = require('/lib/cse');

    libGce.search({
        googleApiKey: "AIzaSyAwerR12fozZQ-rU__sfeFvN_jt21sdf312312as"
        googleCustomSearchEngineId: "02515953347627444:trertmiogwersdf"
        q: "enonic xp"
        })



| Parameter | Required | Meaning | Notes |
| --------- | -------- | ------- | ----- |
| googleApiKey | Yes | | |
| googleCustomSearchEngineId | Yes | | |
| q | Yes | The search query | |
| alt | | Data format for the response. | Valid values: json, atom. Default value: json |
| callback | | Callback function. | Name of the JavaScript callback function that handles the response. Used in JavaScript JSON-P requests. |
| fields | | Selector specifying a subset of fields to include in the response. | |
| prittyPrint | | Returns response with indentations and line breaks. | |
| quotaUser | | Alternative to userIp. | |
| userIp | | IP address of the end user for whom the API call is being made. | |

[More information about the parameters](https://developers.google.com/custom-search/json-api/v1/using_rest) at Googles custom search doc.
