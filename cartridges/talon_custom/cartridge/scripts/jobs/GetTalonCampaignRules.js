'use strict';

var File = require('dw/io/File');
var FileWriter = require('dw/io/FileWriter');
var Status = require('dw/system/Status');
var ProductMgr = require('dw/catalog/ProductMgr');
var CSVStreamWriter = require('dw/io/CSVStreamWriter');

/**
 * Execute the job to generate a CSV file.
 * @param {Object} args - Job arguments
 * @returns {dw.system.Status} - Job status
 */

var File = require('dw/io/File');
var FileWriter = require('dw/io/FileWriter');
function execute(parameters) {
    var status;

    var xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
    <promotions xmlns="http://www.demandware.com/xml/impex/promotion/2008-01-31">
        <global-promotion-settings>
            <global-excluded-products>
                <included-products>
                    <condition-group>
                        <category-condition catalog-id="storefront-catalog-m-en" operator="is equal">
                            <category-id>electronic-games</category-id>
                        </category-condition>
                    </condition-group>
                </included-products>
            </global-excluded-products>
        </global-promotion-settings>
    
        <promotion promotion-id="talon-promotion-xyz">
            <enabled-flag>true</enabled-flag>
            <archived-flag>false</archived-flag>
            <searchable-flag>true</searchable-flag>
            <refinable-flag>false</refinable-flag>
            <prevent-requalifying-flag>false</prevent-requalifying-flag>
            <prorate-across-eligible-items-flag>false</prorate-across-eligible-items-flag>
            <exclusivity>no</exclusivity>
            <currency>USD</currency>
            <name xml:lang="x-default">"Title"</name>
            <details xml:lang="x-default">Testing</details>
            <product-promotion-rule>
                <discounted-products>
                    <included-products>
                        <condition-group>
                            <category-condition catalog-id="storefront-catalog-m-en" operator="is equal">
                                <category-id>newarrivals</category-id>
                                <category-id>womens</category-id>
                                <category-id>mens</category-id>
                                <category-id>electronics</category-id>
                                <category-id>gift-certificates</category-id>
                                <category-id>top-seller</category-id>
                            </category-condition>
                        </condition-group>
                    </included-products>
                </discounted-products>
                <simple-discount>
                    <percentage>10.0</percentage>
                </simple-discount>
            </product-promotion-rule>
        </promotion>
    
    </promotions>
    `;
    var impexFolder = new File(File.IMPEX+'/src/Talon');
    if (!impexFolder.exists()) {
        impexFolder.mkdirs();
    }
 
    var xmlFile = new File(impexFolder, 'talonpromorules.xml');
    var fileWriter = new FileWriter(xmlFile);
 
    try {
        fileWriter.write(xmlContent);
    } catch (e) {
        // Handle errors
    } finally {
        fileWriter.close();
    }
}

module.exports.execute = execute;

