import {
  ChevronLeftIcon,
  HomeIcon,
  CalendarClockIcon,
  CalendarRangeIcon,
  CalendarDaysIcon,
  HelpCircleIcon,
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

export default function App() {
  <h2 className="border-b-2 border-black/30 text-2xl text-black/30">
    Hallinto
  </h2>;

  return (
    <div className="flex h-screen w-screen font-body">
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
            <a href="/" className="text-xl">
              ForeAmmatti
            </a>
            <a href="/" className="text-xl">
              Intro
            </a>
            <a href="/" className="text-xl">
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
              <p className="text-5xl">8:00</p>
            </div>
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <Button>Leimaa sisaan</Button>
            </CardFooter>
          </Card>
          <Card className="h-[370px] w-[300px]">
            <CardContent className="flex flex-col gap-2  px-5 py-3">
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
              <Button className="">Suunnittele</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="h-[340px] w-[472px]">
            <CardHeader className="px-5 py-3">
              <CardTitle className="text-sm">My Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl">8:00</p>
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

