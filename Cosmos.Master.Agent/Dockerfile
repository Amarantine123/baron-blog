#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Cosmos.Master.Agent/Cosmos.Master.Agent.csproj", "Cosmos.Master.Agent/"]
RUN dotnet restore "Cosmos.Master.Agent/Cosmos.Master.Agent.csproj"
COPY . .
WORKDIR "/src/Cosmos.Master.Agent"
RUN dotnet build "Cosmos.Master.Agent.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Cosmos.Master.Agent.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Cosmos.Master.Agent.dll"]