import * as Logos from '../team-logos'
import React from 'react'
import { SidebarDesktop } from './sidebar-desktop'
import { SidebarMobile } from './sidebar-mobile'

const navigation = [
  { name: 'National Hockey League', icon: Logos.NhlLogo },
  { name: 'Anaheim Ducks', icon: Logos.AnaheimDucksLogo },
  { name: 'Arizona Coyotes', icon: Logos.ArizonaCoyotesLogo },
  { name: 'Boston Bruins', icon: Logos.BostonBruinsLogo },
  { name: 'Buffalo Sabres', icon: Logos.BuffaloSabresLogo },
  { name: 'Calgary Flames', icon: Logos.CalgaryFlamesLogo },
  { name: 'Carolina Hurricanes', icon: Logos.CarolinaHurricanesLogo },
  { name: 'Chicago Blackhawks', icon: Logos.ChicagoBlackhawksLogo },
  { name: 'Colorado Avalanche', icon: Logos.ColoradoAvalancheLogo },
  { name: 'Columbus Blue Jackets', icon: Logos.ColumbusBlueJacketsLogo },
  { name: 'Dallas Stars', icon: Logos.DallasStarsLogo },
  { name: 'Detroit Red Wings', icon: Logos.DetroitRedWingsLogo },
  { name: 'Edmonton Oilers', icon: Logos.EdmontonOilersLogo },
  { name: 'Florida Panthers', icon: Logos.FloridaPanthersLogo },
  { name: 'Los Angeles Kings', icon: Logos.LosAngelesKingsLogo },
  { name: 'Minnesota Wild', icon: Logos.MinnesotaWildLogo },
  { name: 'Montréal Canadiens', icon: Logos.MontrealCanadiensLogo },
  { name: 'Nashville Predators', icon: Logos.NashvillePredatorsLogo },
  { name: 'New Jersey Devils', icon: Logos.NewJerseyDevilsLogo },
  { name: 'New York Islanders', icon: Logos.NewYorkIslandersLogo },
  { name: 'New York Rangers', icon: Logos.NewYorkRangersLogo },
  { name: 'Ottawa Senators', icon: Logos.OttawaSenatorsLogo },
  { name: 'Philadelphia Flyers', icon: Logos.PhiladelphiaFlyersLogo },
  { name: 'Pittsburgh Penguins', icon: Logos.PittsburghPenguinsLogo },
  { name: 'San Jose Sharks', icon: Logos.SanJoseSharksLogo },
  { name: 'Seattle Kraken', icon: Logos.SeattleKrakenLogo },
  { name: 'St. Louis Blues', icon: Logos.StLouisBluesLogo },
  { name: 'Tampa Bay Lightning', icon: Logos.TampaBayLightningLogo },
  { name: 'Toronto Maple Leafs', icon: Logos.TornotoMapleLeafsLogo },
  { name: 'Vancouver Canucks', icon: Logos.VancouverCanucksLogo },
  { name: 'Vegas Golden Knights', icon: Logos.VegasGoldenKnightsLogo },
  { name: 'Washington Capitals', icon: Logos.WashingtonCapitalsLogo },
  { name: 'Winnipeg Jets', icon: Logos.WinnipegJetsLogo },
]

export function Sidebar({ isSidebarOpen, setSidebarOpen }) {
  return (
    <>
      <SidebarMobile
        isSidebarOpen={isSidebarOpen} navItems={navigation}
        setSidebarOpen={setSidebarOpen}
      />
      <SidebarDesktop navItems={navigation} />
    </>
  )
}
