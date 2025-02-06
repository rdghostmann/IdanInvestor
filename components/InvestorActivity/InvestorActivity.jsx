import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const deposits = [
  {
    id: "1",
    name: "Lewis Lee",
    date: "Nov-3-2021",
    amount: 3600,
    currency: "SOL",
  },
  {
    id: "2",
    name: "Sarah Chen",
    date: "Nov-3-2021",
    amount: 5200,
    currency: "BTC",
  },
  {
    id: "3",
    name: "Michael Brown",
    date: "Nov-3-2021",
    amount: 2800,
    currency: "ETH",
  },
];

const withdrawals = [
  {
    id: "1",
    name: "Emma Wilson",
    date: "Nov-3-2021",
    amount: 1500,
    currency: "SOL"
  },
  {
    id: "2",
    name: "James Rodriguez",
    date: "Nov-3-2021",
    amount: 4200,
    currency: "BTC"
  },
  {
    id: "3",
    name: "Lisa Wang",
    date: "Nov-3-2021",
    amount: 3100,
    currency: "ETH"
  },
];

const InvestorsActivity = () => {
  return (
    <section className="relative w-full py-14 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.2),transparent_50%)]" />

      <div className="relative px-5 mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-medium">Investors Activity</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Real Time Statistics
          </h2>
          <p className="text-blue-100/70 px-2 max-w-2xl mx-auto">
            Fast and easy way to earn money by making secure and safe investments. Our investors real time activity
            listed below.
          </p>
        </div>

        <div className="w-11/12 mx-auto px-0 lg:px-10 ">
          <Card className="backdrop-blur-sm bg-white/5">
            <CardContent className="p-6">
              <Tabs defaultValue="deposits" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger
                    value="deposits"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500"
                  >
                    Deposits
                  </TabsTrigger>
                  <TabsTrigger
                    value="withdrawals"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500"
                  >
                    Withdrawals
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="deposits">
                  <div className="rounded-lg overflow-x-auto border border-blue-500/20">
                    <Table className="w-full min-w-full">
                      <TableHeader>
                        <TableRow className="bg-blue-950/50 hover:bg-blue-900/50">
                          <TableHead className="text-blue-100">Name</TableHead>
                          <TableHead className="text-blue-100">Date</TableHead>
                          <TableHead className="text-blue-100">Amount</TableHead>
                          <TableHead className="hidden text-blue-100">Currency</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {deposits.map((transaction) => (
                          <TableRow key={transaction.id} className="border-b border-blue-500/20 hover:bg-blue-900/20">
                            <TableCell className="flex items-center gap-2 text-blue-100">
                              <Avatar className="h-8 w-8 border border-blue-500/20">
                                <AvatarImage src={transaction.avatar} />
                                <AvatarFallback className="bg-blue-950 text-blue-200">
                                  {transaction.name[0]}
                                </AvatarFallback>
                              </Avatar>
                              {transaction.name}
                            </TableCell>
                            <TableCell className="text-blue-100">{transaction.date}</TableCell>
                            <TableCell className="text-blue-100">${transaction.amount.toLocaleString()}</TableCell>
                            <TableCell className="hidden text-blue-100">{transaction.currency}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="withdrawals">
                  <div className="rounded-lg overflow-x-auto border border-indigo-500/20">
                    <Table className="min-w-full">
                      <TableHeader>
                        <TableRow className="bg-indigo-950/50 hover:bg-indigo-900/50">
                          <TableHead className="text-blue-100">Name</TableHead>
                          <TableHead className="text-blue-100">Date</TableHead>
                          <TableHead className="text-blue-100">Amount</TableHead>
                          <TableHead className="hidden text-blue-100">Currency</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {withdrawals.map((transaction) => (
                          <TableRow key={transaction.id} className="border-b border-indigo-500/20 hover:bg-indigo-900/20">
                            <TableCell className="flex items-center gap-2 text-blue-100">
                              <Avatar className="h-8 w-8 border border-indigo-500/20">
                                <AvatarFallback className="bg-indigo-950 text-blue-200">
                                  {transaction.name[0]}
                                </AvatarFallback>
                              </Avatar>
                              {transaction.name}
                            </TableCell>
                            <TableCell className="text-blue-100">{transaction.date}</TableCell>
                            <TableCell className="text-blue-100">${transaction.amount.toLocaleString()}</TableCell>
                            <TableCell className="hidden text-blue-100">{transaction.currency}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default InvestorsActivity;
