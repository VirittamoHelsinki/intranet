import { useState } from 'react'
import {
    ChevronLeftIcon,
    HomeIcon,
    CalendarClockIcon,
    CalendarRangeIcon,
    CalendarDaysIcon,
    HelpCircleIcon,
    CalendarIcon,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Calendar } from "./components/ui/calendar";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./components/ui/select";

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from "recharts";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { cn } from "./lib/utils";
import { format } from 'date-fns';

import Authorize from './components/renderless/Authorize';

const data = [
    {
        subject: "TypeScript",
        A: 120,
        B: 110,
        fullMark: 150
    },
    {
        subject: "Algorithm",
        A: 98,
        B: 130,
        fullMark: 150
    },
    {
        subject: 'Fullstack',
        A: 54,
        B: 20,
        fullMark: 150
    },
    {
        subject: "Data Visualizition",
        A: 86,
        B: 130,
        fullMark: 150
    },
    {
        subject: "DevOPS",
        A: 99,
        B: 100,
        fullMark: 150
    },
    {
        subject: "MySQL",
        A: 85,
        B: 90,
        fullMark: 150
    },
    {
        subject: "UI/UX Design",
        A: 65,
        B: 85,
        fullMark: 150
    },
    {
        subject: "Rust",
        A: 65,
        B: 85,
        fullMark: 150
    }

];

function DatePicker() {
    const [date, setDate] = useState<Date>()
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[220px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Varaus Päivä</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

function ReserveMeetingDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Varaa Aika</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Kuutio Ajanvaraus</DialogTitle>
                </DialogHeader>
                <div className="flex flex-wrap gap-2 py-4">
                    <div className="col-span-3 flex flex-col items-start gap-2">
                        <Label htmlFor="name" className="text-right">
                            Aihe
                        </Label>
                        <Input id="name" placeholder="kirjoitaa aihe..." className="col-span-3" />
                    </div>
                    <div className="col-span-2 flex flex-col items-start gap-2">
                        <Label htmlFor="username" className="text-right">
                            Paikka
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Valitse Paikka" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Paikat</SelectLabel>
                                    <SelectItem value="apple">Kuutio</SelectItem>
                                    <SelectItem value="banana">Softa Corner</SelectItem>
                                    <SelectItem value="blueberry">ICT Corner</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="name" className="text-right">
                            Varauspäivä
                        </Label>
                        <DatePicker />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="username" className="text-right">
                            Kesto
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Kesto" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Kesto</SelectLabel>
                                    <SelectItem value="30min">30 min</SelectItem>
                                    <SelectItem value="1h">1 h</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="username" className="text-right">
                            Aika
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Valitse Aika" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Aika</SelectLabel>
                                    <SelectItem value="08:00-08:30">08:00 - 08:03</SelectItem>
                                    <SelectItem value="09:00-10:00">09:00 - 10:00</SelectItem>
                                    <SelectItem value="11:30-12:00">11:30 - 12:00</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant='outline'>Peru</Button>
                    <Button type="submit">Varaa aika</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

function WorkPlanner() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Suunnitele</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Työvuorosuunnitelma</DialogTitle>
                </DialogHeader>
                <div className="flex flex-wrap gap-2 py-4">
                    <div className="flex flex-col flex-1 items-start gap-2">
                        <Calendar />
                    </div>
                    <div className='flex flex-wrap flex-1 gap-1'>
                        <div className="flex flex-col items-start gap-2">
                            <Label htmlFor="name" className="text-right">
                                Varauspäivä
                            </Label>
                            <DatePicker />
                        </div>

                        <div className="flex flex-col items-start gap-2">
                            <Label htmlFor="username" className="text-right">
                                Kesto
                            </Label>
                            <Select>
                                <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Kesto" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Kesto</SelectLabel>
                                        <SelectItem value="30min">30 min</SelectItem>
                                        <SelectItem value="1h">1 h</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Label htmlFor="username" className="text-right">
                                Aika
                            </Label>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Valitse Aika" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Aika</SelectLabel>
                                        <SelectItem value="08:00-08:30">08:00 - 08:03</SelectItem>
                                        <SelectItem value="09:00-10:00">09:00 - 10:00</SelectItem>
                                        <SelectItem value="11:30-12:00">11:30 - 12:00</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant='outline'>Peru</Button>
                    <Button type="submit">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
function Sidebar() {
    return (
        <header className="flex flex-col gap-10 border px-10 pt-20">
            <div className="flex justify-between">
                <h1 className="font-display text-5xl font-bold">Intranet</h1>
                <ChevronLeftIcon className="h-12 w-12" />
            </div>
            <nav className="flex flex-grow flex-col justify-around">
                <menu className="flex flex-col gap-7">
                    <a href="/" className="flex gap-3 text-xl">
                        <HomeIcon />
                        <span>Etusivu</span>
                    </a>
                    <a href="/kuutio" className="flex gap-3 text-xl">
                        <CalendarClockIcon />
                        <span>Kuutio</span>
                    </a>
                    <a href="/kuutio" className="flex gap-3 text-xl">
                        <CalendarRangeIcon />
                        <span>Työaikaleimaus</span>
                    </a>
                    <a href="/kuutio" className="flex gap-3 text-xl">
                        <CalendarDaysIcon />
                        <span>Työvuorosuunnitelma</span>
                    </a>
                </menu>
                <menu className="flex flex-col gap-1">
                    <div>
                        <h2 className="text-2xl text-slate-100">Hallinto</h2>
                        <Separator className="h-[2px]" />
                    </div>
                    <a href="/aava" className="text-xl">
                        Aava
                    </a>
                    <a href="/taitovarasto" className="text-xl">
                        Taitovarasto
                    </a>
                </menu>
                <menu className="flex flex-col gap-1">
                    <h2 className="border-b-2 border-black/30 text-2xl text-black/30">
                        Muuta
                    </h2>
                    <a href="https://www.foreammatti.fi" className="text-xl">
                        ForeAmmatti
                    </a>
                    <a href="https://intro.elbit.fi" className="text-xl">
                        Intro
                    </a>
                    <a href="https://www.sarastia.fi" className="text-xl">
                        Sarastia
                    </a>
                </menu>
            </nav>
            <a href="/" className="flex gap-3 text-xl">
                <HelpCircleIcon />
                Tuki
            </a>
            <Separator />
            <div className="flex items-center justify-center gap-3 py-5">
                <div className="h-10 w-10 rounded bg-rose-50" />
                <div>
                    <p>Arto Aitta</p>
                    <span className="opacity-30">arto.aitta@edu.hel.fi</span>
                </div>
            </div>
        </header>
    )
}
// <Authorize />
export default function App() {
    return (
        <div className="flex h-screen w-screen font-body">
            
            <Sidebar />
            <main className="flex flex-col px-20 pt-20">
                <h2 className="pb-5 font-display text-[2.5rem] font-bold">
                    Yhteenveto
                </h2>
                <p className="pb-7 text-xl font-medium">Tämä viikon</p>
                <div className="flex max-w-[1500px] flex-wrap gap-5">
                    <Card className="h-[370px] w-[300px] space-y-5">
                        <CardHeader className="px-5 py-3">
                            <CardTitle className="text-sm">Työaikaleimaus</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-grow justify-center items-center">
                            <div className='flex justify-center items-center border-2 rounded-full w-52 h-52'>
                                <p className="text-5xl">{new Date().toLocaleTimeString('fi-FI', { hour: "2-digit", minute: "2-digit" })}</p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center items-center">
                            <Button>Leimaa sisaan</Button>
                        </CardFooter>
                    </Card>
                    <Card className="h-[370px] w-[300px]">
                        <CardContent className="flex flex-col gap-2 px-5 py-3">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-sm">Maanatai 20. elokuu</h2>
                                <div className="flex justify-between p-3 bg-slate-900 rounded">
                                    <p className="text-slate-50 text-sm">Kuutio</p>
                                    <span className="text-slate-50 text-sm">
                                        8:00
                                        9:00
                                    </span>
                                </div>
                                <div className="flex justify-between p-3 bg-slate-900 rounded">
                                    <p className="text-slate-50 text-sm">Kuutio</p>
                                    <span className="text-slate-50 text-sm">
                                        8:00
                                        9:00
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className="text-sm">Huomenna 21. elokuu</h2>
                                <p className="opacity-70 text-sm">Ei Varratuja Aikoja</p>
                            </div>
                        </CardContent>
                        <CardFooter >
                            <ReserveMeetingDialog />
                            {/*<Button>Varaa aikaa</Button> */}
                        </CardFooter>
                    </Card>
                    <Card className="h-[370px] w-[472px]">
                        <CardHeader className="px-5 py-3">
                            <CardTitle className="text-sm">Projektit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Card className="">
                                <CardContent className="flex justify-between items-center flex-grow px-5 py-3">
                                    <div className="flex flex-col">
                                        <p>Taitovarasto MVP</p>
                                        <p>softa</p>
                                        <p>Due date 23.08.2023</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className='w-2 h-2 rounded-full bg-green-400 ' />
                                        <p>Valmis</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                    <Card className="h-[370px] w-[300px]">
                        <CardHeader className="px-5 py-3">
                            <CardTitle className='text-sm'>Tanaan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl">8:00</p>
                        </CardContent>
                    </Card>

                    <Card className="h-[340px] w-[620px]">
                        <CardContent className='flex px-5 py-3'>
                            <Calendar />
                            <div className='flex flex-col flex-grow w-full gap-2'>
                                <div className="flex justify-between p-3 border rounded">
                                    <p className="text-sm">Kuutio</p>
                                    <span className="text-sm">
                                        8:00
                                        9:00
                                    </span>
                                </div>
                                <div className="flex justify-between p-3 border rounded">
                                    <p className="text-sm">Kuutio</p>
                                    <span className="text-sm">
                                        8:00
                                        9:00
                                    </span>
                                </div>
                                <WorkPlanner />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="h-[340px] w-[472px]">
                        <CardHeader className="px-5 py-3">
                            <CardTitle className="text-sm">My Skills</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={250}>
                                <RadarChart data={data}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" />
                                    <PolarRadiusAxis />
                                    <Radar
                                        name="Mike"
                                        dataKey="A"
                                        stroke="#8884d8"
                                        fill="#8884d8"
                                        fillOpacity={0.6}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card className="h-[340px] w-[300px]">
                        <CardHeader className="px-5 py-3">
                            <CardTitle className='text-sm'>Uutiset</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl">8:00</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
