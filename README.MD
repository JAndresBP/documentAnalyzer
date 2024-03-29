# Create a resource group
``` powershell
az group create -n documentAnalyzerGroup --location eastus
```

# Create a storage account
``` powershell
az storage account create --sku Standard_LRS --location EastUS -g documentAnalyzerGroup -n danalayzerstorage
```

# Create app serviceplan
``` powershell
az appservice plan create -n danalyzerplan --sku free -g documentAnalyzerGroup
```
# create a web app for the API
``` powershell
az webapp create -g documentAnalyzerGroup -n documentAnalyzerApi --plan danalyzerplan
```
# create app insights resource
``` powershell
az monitor app-insights component create --app documentAnalyzerApi -l eastus -g documentAnalyzerGroup
```
# get instrumentation key
``` powershell
$instrumentationKey = (az monitor app-insights component show --app documentAnalyzerApi -g documentAnalyzerGroup --query "instrumentationKey" --output tsv)
```
# configure web app
``` powershell
az webapp config appsettings set --name documentAnalyzerApi -g documentAnalyzerGroup --settings APPINSIGHTS_INSTRUMENTATIONKEY=$instrumentationKey APPLICATIONINSIGHTS_CONNECTION_STRING=InstrumentationKey=$instrumentationKey ApplicationInsightsAgent_EXTENSION_VERSION=~2
```
# get resource group resources 
``` powershell
az resource list -g documentAnalyzerGroup --query "[*].name"
```
# deploy app (change to directoy where the code is published locally)
``` powershell
az webapp up --name documentAnalyzerApi -g documentAnalyzerGroup --runtime dotnet:7
```
# get storage connection string
``` powershell
$storageConnectionString = (az storage account show-connection-string -n danalyzerstorage -g documentAnalyzerGroup --query connectionString)
```
# set storage connection string 
``` powershell
az webapp config connection-string --set -n documentAnalyzerApi -g documentAnalyzerGroup --settings BlobConnectionString=$storageConnectionString
```
# create a static web app
``` powershell
az staticwebapp create -n documentAnalyzerSpa -g documentAnalyzerGroup -s https://github.com/JAndresBP/documentAnalyzer -l eastus2 --branch main --app-location "/documentAnalyzerSpa" --output-location "dist" --login-with-github
```

# Create a function
``` powershell
az functionapp create -n documentAnalyzerProcess -g documentAnalyzerGroup -s danalyzerstorage -c eastus --runtime dotnet --os-type windows --functions-version 4
```
