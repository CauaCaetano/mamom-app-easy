import { useState } from "react";
import { Calendar, Clock, User, Menu, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekDays = ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"];
  const dates = [10, 11, 12, 13, 14, 15, 16];

  const appointments = [
    { time: "9:30 - 10:15 AM", client: "", service: "", color: "bg-primary/20 border-l-4 border-primary" },
    { time: "9:30 - 10:30 AM", client: "Mary Jones", service: "Acrylic Manicure", color: "bg-secondary/40 border-l-4 border-pink-400" },
    { time: "11:00 - 11:15 AM", client: "", service: "", color: "bg-secondary/20 border-l-4 border-pink-300" },
    { time: "11:15 AM - 12:15 PM", client: "", service: "", color: "bg-purple-100 border-l-4 border-purple-400" },
    { time: "11:30 AM - 12:30 PM", client: "", service: "", color: "bg-blue-100 border-l-4 border-blue-400" },
    { time: "12:30 - 1:15 PM", client: "", service: "", color: "bg-primary/20 border-l-4 border-primary" },
    { time: "1:15 - 2:45 PM", client: "", service: "", color: "bg-primary/20 border-l-4 border-primary" },
    { time: "1:15 - 1:30 PM", client: "", service: "", color: "bg-pink-200 border-l-4 border-pink-500" },
    { time: "1:45 - 2:30 PM", client: "", service: "", color: "bg-primary/20 border-l-4 border-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b px-6 py-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-lg font-semibold">Mon, 10 Jun</h2>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">9:00 AM - 7:00 PM</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Week Calendar */}
      <div className="px-4 py-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {weekDays.map((day, index) => (
            <button
              key={day}
              onClick={() => setSelectedDate(new Date())}
              className={`flex flex-col items-center min-w-[60px] p-3 rounded-xl transition-colors ${
                index === 2
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <span className="text-xs font-medium mb-1">{day}</span>
              <span className="text-lg font-semibold">{dates[index]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Clients */}
      <div className="px-6 py-4">
        <div className="flex gap-4 overflow-x-auto">
          <div className="flex flex-col items-center gap-2 min-w-[80px]">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <User className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="text-xs font-medium">Patricia Taylor</p>
              <p className="text-[10px] text-muted-foreground">9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 min-w-[80px]">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <User className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="text-xs font-medium">Michael Brown</p>
              <p className="text-[10px] text-muted-foreground">9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 pb-24 space-y-2">
        {appointments.map((apt, index) => (
          <div
            key={index}
            className={`${apt.color} rounded-xl p-4 min-h-[80px] flex flex-col justify-center`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-sm">{apt.time}</p>
                {apt.client && (
                  <>
                    <p className="text-sm mt-1">{apt.client} • {apt.service}</p>
                  </>
                )}
              </div>
              {apt.client && (
                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* FAB */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-foreground hover:bg-foreground/90 shadow-lg"
      >
        <Plus className="w-6 h-6" />
      </Button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t px-6 py-3 flex items-center justify-around">
        <Button variant="ghost" size="icon">
          <Calendar className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Clock className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
