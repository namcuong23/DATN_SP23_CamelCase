export interface ChartData {
    totalUser: {
      totalUser: number;
      userLastWeekTotal: number;
      userWeekBeforeLastTotal: number;
    };
    totalNTV: {
      totalNTV: number;
      userLastWeekTotalNTV: number;
      userWeekBeforeLastTotalNTV: number;
    };
    totalNTD: {
      totalNTD: number;
      userLastWeekTotalNTD: number;
      userWeekBeforeLastTotalNTD: number;
    };
    totalCareers: number;
    TotalPosts: number;
    TotalPackage: number;
    packageData: []
  }
  