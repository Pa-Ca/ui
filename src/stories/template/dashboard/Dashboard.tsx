import React, { useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts";
import useWindowResize from "../../hooks/useWindowResize";
import { HeaderProps } from "../../organisms/header/Header";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";

interface DashboardProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  userName: string;
  localFilled: number;
  reservations: number;
  reservationsToApprove: number;
  monthlyProfit: { date: string; profit: number }[];
  bestProducts: { name: string; quantity: number }[];
}

/**
 * Primary UI component for user interaction
 */
export const Dashboard = ({
  header,
  userName,
  localFilled,
  reservations,
  reservationsToApprove,
  monthlyProfit,
  bestProducts,
  ...props
}: DashboardProps) => {
  const filledChartRef = useRef(null);
  const monthlyProfitChartRef = useRef(null);
  const bestProductsChartRefs = bestProducts.reduce(
    (acc: { [key: number]: React.RefObject<HTMLDivElement> }, val, i) => {
      acc[i] = React.createRef();
      return acc;
    },
    {}
  );
  const windowSize = useWindowResize();

  const PageWrapper = useMemo(
    () => (windowSize.resolutionType === "desktop" ? BasicPage : BasicMobilePage),
    [windowSize.resolutionType]
  );

  useEffect(() => {
    const chartInstance = echarts.init(filledChartRef.current);
    chartInstance.setOption({
      series: [
        {
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          radius: "100%",
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: "#ef7b00",
              color: "#ef7b00",
            },
          },
          axisLine: {
            lineStyle: {
              width: 40,
            },
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            distance: 50,
          },
          data: [{ value: localFilled, name: "Porcentaje del local lleno" }],
          title: {
            fontSize: 14,
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 14,
            color: "black",
            borderColor: "#ef7b00",
            borderRadius: 20,
            borderWidth: 1,
            formatter: "{value}%",
          },
        },
      ],
    });
  }, [localFilled, filledChartRef]);

  useEffect(() => {
    const sortedMonthlyProfit = monthlyProfit.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateA.getTime() - dateB.getTime();
    });

    const values = sortedMonthlyProfit.map((profit) => profit.profit);
    const dates = sortedMonthlyProfit.map((profit) => profit.date);
    const maxValue = Math.max(...values);

    const chartInstance = echarts.init(monthlyProfitChartRef.current);
    chartInstance.setOption({
      // Make gradient line here
      visualMap: [
        {
          show: false,
          type: "continuous",
          seriesIndex: 0,
          min: 0,
          max: maxValue * 1.2,
        },
      ],
      tooltip: {
        trigger: "axis",
      },
      xAxis: [
        {
          data: dates,
        },
      ],
      yAxis: [{}],
      series: [
        {
          type: "line",
          showSymbol: false,
          data: values,
        },
      ],
    });
  }, [monthlyProfit, monthlyProfitChartRef]);

  useEffect(() => {
    bestProducts.forEach((product, index) => {
      const chartInstance = echarts.init(bestProductsChartRefs[index].current);
      chartInstance.setOption({
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            radius: "100%",
            pointer: {
              show: false,
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: "#ef7b00",
                color: "#ef7b00",
              },
            },
            axisLine: {
              lineStyle: {
                width: 20,
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              distance: 50,
            },
            data: [{ value: product.quantity, name: product.name }],
            title: {
              fontSize: 14,
            },
            detail: {
              width: 50,
              height: 14,
              fontSize: 14,
              color: "black",
              borderColor: "#ef7b00",
              borderRadius: 20,
              borderWidth: 1,
              formatter: "{value}%",
            },
          },
        ],
      });
    });
  }, [bestProductsChartRefs, bestProducts]);

  return (
    <PageWrapper headerArgs={header}>
      <Box>
        <Text type="h3" weight="600">
          Bienvenido, {userName}
        </Text>
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <Text type="h4" weight="700">
          Estadísticas del Local
        </Text>

        <Box
          weakShadow
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            paddingTop: "40px",
            gap: "20px",
            marginBottom: "40px",
            borderRadius: "10px",
          }}
        >
          <Box
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <Box
              style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <div ref={filledChartRef} style={{ height: "300px", width: "300px" }} />
            </Box>

            <Box
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <Icon icon="table" size="30px" />
                <Text type="h5" weight="600">
                  Número de reservas
                </Text>
              </Box>

              <Box
                style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}
              >
                <Text style={{ fontSize: "144px" }}>{reservations}</Text>
              </Box>
            </Box>

            <Box
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <Icon icon="table" size="30px" />
                <Text type="h5" weight="600">
                  Número de reservas por aprobar
                </Text>
              </Box>

              <Box
                style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}
              >
                <Text style={{ fontSize: "144px" }}>{reservationsToApprove}</Text>
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Box
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <Icon icon="dollar" size="30px" />
                <Text type="h5" weight="600">
                  Ganancias mensuales
                </Text>
              </Box>

              <div ref={monthlyProfitChartRef} style={{ width: "100%", height: "400px" }} />
            </Box>

            <Box
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <Icon icon="fast-food" size="30px" />
                <Text type="h5" weight="600">
                  Productos más populares
                </Text>
              </Box>

              <Box
                style={{
                  flex: 1,
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {bestProducts.map((item, i) => (
                  <Box
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      key={i}
                      ref={bestProductsChartRefs[i]}
                      style={{ width: "100%", height: "300px" }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};
