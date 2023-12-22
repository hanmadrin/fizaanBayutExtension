



(async()=>{
    let result = {};
    try{
        let page = 1;
        const endPage = 1;
        for(; page <= endPage; page++){
            console.log(page);
            const data = await fetch("https://ll8iz711cs-3.algolianet.com/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser%20(lite)&x-algolia-application-id=LL8IZ711CS&x-algolia-api-key=15cb8b0a2d2d435c6613111d860ecfc5", {
                "credentials": "omit",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0",
                    "Accept": "application/json",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Pragma": "no-cache",
                    "Cache-Control": "no-cache",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "cross-site"
                },
                "referrer": "https://www.bayut.com/",
                "body": JSON.stringify({
                    "requests": [
                    {
                        "indexName": "bayut-production-ads-en",
                        // "params": "page=1200&hitsPerPage=25&query=&optionalWords=&facets=%5B%5D&maxValuesPerFacet=10&attributesToHighlight=%5B%5D&attributesToRetrieve=%5B%22agency%22%2C%22area%22%2C%22baths%22%2C%22category%22%2C%22contactName%22%2C%22externalID%22%2C%22id%22%2C%22location%22%2C%22objectID%22%2C%22phoneNumber%22%2C%22coverPhoto%22%2C%22photoCount%22%2C%22price%22%2C%22product%22%2C%22productLabel%22%2C%22purpose%22%2C%22geography%22%2C%22permitNumber%22%2C%22referenceNumber%22%2C%22rentFrequency%22%2C%22rooms%22%2C%22slug%22%2C%22slug_l1%22%2C%22slug_l2%22%2C%22slug_l3%22%2C%22title%22%2C%22title_l1%22%2C%22title_l2%22%2C%22title_l3%22%2C%22createdAt%22%2C%22updatedAt%22%2C%22ownerID%22%2C%22isVerified%22%2C%22propertyTour%22%2C%22verification%22%2C%22completionStatus%22%2C%22furnishingStatus%22%2C%22-agency.tier%22%2C%22requiresLogin%22%2C%22coverVideo%22%2C%22videoCount%22%2C%22description%22%2C%22description_l1%22%2C%22description_l2%22%2C%22description_l3%22%2C%22descriptionTranslated%22%2C%22descriptionTranslated_l1%22%2C%22descriptionTranslated_l2%22%2C%22descriptionTranslated_l3%22%2C%22floorPlanID%22%2C%22panoramaCount%22%2C%22hasMatchingFloorPlans%22%2C%22hasTransactionHistory%22%2C%22state%22%2C%22photoIDs%22%2C%22reactivatedAt%22%2C%22hidePrice%22%2C%22extraFields%22%2C%22projectNumber%22%2C%22locationPurposeTier%22%2C%22ownerAgent%22%2C%22hasEmail%22%2C%22plotArea%22%5D&filters=purpose%3A%22for-rent%22%20AND%20(location.slug%3A%22%2Fdubai%22)%20AND%20rentFrequency%3A%22yearly%22%20AND%20category.slug%3A%22residential%22&numericFilters="
                        params : (() => {
                            let params = new URLSearchParams();
                            const paramsObj = {
                                page,
                                hitsPerPage: 20,
                                query: "",
                                optionalWords: "",
                                facets: [],
                                maxValuesPerFacet: 10,
                                attributesToHighlight: [],
                                attributesToRetrieve: [
                                    "state",
                                    "agency",
                                    "area",
                                    "baths",
                                    "category",
                                    // "contactName",
                                    "externalID",
                                    // "id",
                                    "location",
                                    // "objectID",
                                    "phoneNumber",
                                    // "coverPhoto",
                                    // "photoCount",
                                    "price",
                                    // "product",
                                    // "productLabel",
                                    "purpose",
                                    // "geography",
                                    "permitNumber",
                                    "referenceNumber",
                                    "rentFrequency",
                                    "rooms",
                                    // "slug",
                                    // "slug_l1",
                                    // "slug_l2",
                                    // "slug_l3",
                                    "title",
                                    // "title_l1",
                                    // "title_l2",
                                    // "title_l3",
                                    "createdAt",
                                    // "updatedAt",
                                    // "ownerID",
                                    // "isVerified",
                                    // "propertyTour",
                                    "verification",
                                    "completionStatus",
                                    "furnishingStatus",
                                    "occupancyStatus"
                                    // "-agency.tier",
                                    // "requiresLogin",
                                    // "coverVideo",
                                    // "videoCount",
                                    // "description",
                                    // "description_l1",
                                    // "description_l2",
                                    // "description_l3",
                                    // "descriptionTranslated",
                                    // "descriptionTranslated_l1",
                                    // "descriptionTranslated_l2",
                                    // "descriptionTranslated_l3",
                                    // "floorPlanID",
                                    // "panoramaCount",
                                    // "hasMatchingFloorPlans",
                                    // "hasTransactionHistory",
                                    // "photoIDs",
                                    // "reactivatedAt",
                                    // "hidePrice",
                                    // "extraFields",
                                    // "projectNumber",
                                    // "locationPurposeTier",
                                    // "ownerAgent",
                                    // "hasEmail",
                                    // "plotArea"
                                ],
                                // filters: "purpose:\"for-rent\" AND (location.slug:\"/dubai\") AND rentFrequency:\"yearly\" AND category.slug:\"residential\"",
                                // filters: "purpose:\"for-rent\"  AND category.slug:\"residential-floors\"",
                                filters : (()=>{
                                    const filters = {
                                        "purpose": "for-rent",
                                        "location.slug": "/dubai",
                                        "rentFrequency": "yearly",
                                        "category.slug": "apartments",
                                        // "category.slug": "residential-floors",
                                    };
                                    let filterStr = "";
                                    for(const key in filters){
                                        filterStr += `${key}:"${filters[key]}" AND `;
                                    }
                                    return filterStr.slice(0, -5);
                                })(),
                                
                            };
                            for (const key in paramsObj) {
                                params.append(key, paramsObj[key]);
                            }
                            return params.toString();
                        })()
                    }
                    ]
                }),
                "method": "POST",
                "mode": "cors"
            });
            const res = await data.json();
            const {hits} = res.results[0];
            hits.map((item) => {
                result[`${item.externalID}`] = {
                    // https://www.bayut.com/property/details-8321482.html
                    url: `https://www.bayut.com/property/details-${item.externalID}.html`,
                    state: item.state,
                    title: item.title,
                    purpose: item.purpose,
                    price: item.price,
                    rentFrequency: item.rentFrequency,
                    referenceNumber: item.referenceNumber,
                    phoneNumber: item.phoneNumber.phone || item.phoneNumber.mobile,
                    agency: item.agency.name,
                    area: ((area)=>{
                        return area ? `${Math.round(area * 10.7639)} sqft` : null;
                    })(item.area),
                    baths: item.baths,
                    rooms: item.rooms,
                    location: ((locations)=>{
                        let location = "";
                        for(let i = locations.length - 1; i >= 0; i--){
                            location += locations[i].name + ", ";
                        }
                        return location;
                    })(item.location),
                    permitNumber: item.permitNumber,
                    completionStatus: item.completionStatus,
                    furnishingStatus: item.furnishingStatus,
                    verification: item.verification.status,
                    createdAt: item.createdAt,
                    externalID: item.externalID,
                    category: (()=>{
                        let category = "";
                        for(let i = item.category.length - 1; i >= 0; i--){
                            category += item.category[i].name + ", ";
                        }
                        return category;
                    })(item.category),
                    // type: item.type,
                    // occupancyStatus: item.occupancyStatus,
                };
            });
            // break;
        }

        console.log(result)
    }catch(e){
        console.log(e);
        console.log(result);
    }
})();