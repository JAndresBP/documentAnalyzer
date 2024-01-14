FROM mcr.microsoft.com/dotnet/sdk:7.0

WORKDIR /App

COPY ./bin/Debug/net7.0 ./

ENTRYPOINT [ "dotnet", "documentAnalyzerApi.dll" ]