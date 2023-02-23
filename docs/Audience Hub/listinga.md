---
title: Audience listing 
---



<head>
  <title>Keyboard Guide: Tools to Manage an On-Screen Mobile App Keyboard</title>
  <meta
    name="description"
    content="Accounting for an on-screen keyboard is a common developer roadblock. This guide introduces the tools available for managing on-screen keyboards in mobile apps."
  />
</head>

Using Audience Hub you can create a custom audience for any user or user segment, access the list of preset audiences and view their related metrics & overlap information


## Getting to Audience Hub

- From the Blox Home Page -\> Click on Audience Hub to visit the Audience Home Screen.
- Click on 'Audience Manager' on the navigation bar to access the list of Audience or to 'Upload' a custom Audience.
- Alternatively, Hover over the Audience Hub on the navigation bar and click on 'Audience Manager'.

# Audience Listing

In Audience Manager, view the list of "All Audiences" created in a table. From here you can either 'Upload' a custom Audience or view Audience configuration & overlap details.



### Search Audience

1. You can search for the created Audiences using the Audience name via search bar or use one of the suggested/recently searched keywords.
2. You can find the search results populated in the table.

### Sort Columns

1. Hover over the column header to find the sort icon next to each column
2. Click the Sort icon to sort the column alphabetically either in ascending or descending order.
3. If the sort is applied to multiple columns, the column for which sort was applied last will take precedence.

### Filter Columns

1. Hover over the column header to find the filter icon next to each column
2. Click the filter icon to open up a dropdown from which you can multi-select the values to be filtered.
3. You can also search for a filter value within the dropdown.
4. The table will be populated with the filtered results.

## Checking Performance Data:

In the Audience listing table, next to each audience name, by default, you will find data about the performance of that segment. Data includes:

| **Metrics** | **Description** |
| --- | --- |
| Conversion Rate | Number of Orders placed per Visit |
| Revenue Per Visit | Total Revenue generated per Visit |
| AOV | Average Revenue generated per Order |
| AOS | Average Products Purchased per Order |
| Unique Visitors | Number of unique visitors |

## Checking Overlap Information

1. In the Audience listing table, click on the 'Overlap' icon next to the audience name
2. You can view overlap
````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```html
<ion-item>
  <ion-label>Enter search query</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<ion-item>
  <ion-label>Enter search query</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</TabItem>
<TabItem value="react">

```html
<IonItem>
  <IonLabel>Enter search query</IonLabel>
  <IonInput enterkeyhint="search" type="search"></IonInput>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<ion-item>
  <ion-label>Enter search query</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</TabItem>
</Tabs>
````

<Codepen user="ionic" slug="GRpWyRB" height="350" />

:::note
The `enterkeyhint` attribute is supported on devices running Chrome 77+ and iOS Safari 13.4+.
:::

