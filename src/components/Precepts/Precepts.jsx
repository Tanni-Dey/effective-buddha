import React from "react";
import "./Precepts.css";
import precept from "../../assets/images/precet.jpg";

const Precepts = () => {
  const allPrecpts = [
    {
      id: 1,
      pera: "A disciple of the Buddha shall not himself kill, encourage others to kill, kill by expedient means, praise killing, rejoice at witnessing killing, or kill through incantation or deviant mantras. He must not create the causes, conditions, methods, or karma of killing, and shall not intentionally kill any living creature. As a Buddha's disciple, he ought to nurture a mind of compassion and filial piety, always devising expedient means to rescue and protect all beings. If instead, he fails to restrain himself and kills sentient beings without mercy, he commits a Parajika (major) offense.",
    },
    {
      id: 2,
      pera: "A disciple of the Buddha must not himself steal or encourage others to steal, steal by expedient means, steal by means of incantation or deviant mantras. He should not create the causes, conditions, methods, or karma of stealing. No valuables or possessions, even those belonging to ghosts and spirits or thieves and robbers, be they as small as a needle or blade of grass, may be stolen. As a Buddha's disciple, he ought to have a mind of mercy, compassion, and filial piety -- always helping people earn merits and achieve happiness. If instead, he steals the possessions of others, he commits a Parajika offense.",
    },
    {
      id: 3,
      pera: "A disciple of the Buddha must not engage in licentious acts or encourage others to do so. [As a monk] he should not have sexual relations with any female -- be she a human, animal, deity or spirit -- nor create the causes, conditions, methods, or karma of such misconduct. Indeed, he must not engage in improper sexual conduct with anyone. A Buddha's disciple ought to have a mind of filial piety -- rescuing all sentient beings and instructing them in the Dharma of purity and chastity. If instead, he lacks compassion and encourages others to engage in sexual relations promiscuously, including with animals and even their mothers, daughters, sisters, or other close relatives, he commits a Parajika offense.",
    },
    {
      id: 4,
      pera: "A disciple of the Buddha must not himself use false words and speech, or encourage others to lie or lie by expedient means. He should not involve himself in the causes, conditions, methods, or karma of lying, saying that he has seen what he has not seen or vice versa, or lying implicitly through physical or mental means. As a Buddha's disciple, he ought to maintain Right Speech and Right Views always, and lead all others to maintain them as well. If instead, he causes wrong speech, wrong views or evil karma in others, he commits a Parajika offense.",
    },
    {
      id: 5,
      pera: "A disciple of the Buddha must not trade in alcoholic beverages or encourage others to do so. He should not create the causes, conditions, methods, or karma of selling any intoxicant whatsoever, for intoxicants are the causes and conditions of all kinds of offenses. As a Buddha's disciple, he ought to help all sentient beings achieve clear wisdom. If instead, he causes them to have upside-down, topsy-turvy thinking, he commits a Parajika offense.",
    },
    {
      id: 6,
      pera: "A disciple of the Buddha must not himself broadcast the misdeeds or infractions of Bodhisattva-clerics or Bodhisattva-laypersons, or of [ordinary] monks and nuns -- nor encourage others to do so. He must not create the causes, conditions, methods, or karma of discussing the offenses of the assembly. As a Buddha's disciple, whenever he hears evil persons, externalists or followers of the Two Vehicles speak of practices contrary to the Dharma or contrary to the precepts within the Buddhist community, he should instruct them with a compassionate mind and lead them to develop wholesome faith in the Mahayana. If instead, he discusses the faults and misdeeds that occur within the assembly, he commits a Parajika offense.",
    },
    {
      id: 7,
      pera: "A disciple of the Buddha shall not praise himself and speak ill of others, or encourage others to do so. He must not create the causes, conditions, methods, or karma of praising himself and disparaging others. As a disciple of the Buddha, he should be willing to stand in for all sentient beings and endure humiliation and slander -- accepting blame and letting sentient beings have all the glory. If instead, he displays his own virtues and conceals the good points of others, thus causing them to suffer slander, he commits a Parajika offense.",
    },
    {
      id: 8,
      pera: "A disciple of the Buddha must not be stingy or encourage others to be stingy. He should not create the causes, conditions, methods, or karma of stinginess. As a Bodhisattva, whenever a destitute person comes for help, he should give that person what he needs. If instead, out of anger and resentment, he denies all assistance -- refusing to help with even a penny, a needle, a blade of grass, even a single sentence or verse or a phrase of Dharma, but instead scolds and abuses that person -- he commits a Parajika offense.",
    },
    {
      id: 9,
      pera: "A disciple of the Buddha shall not harbor anger or encourage others to be angry. He should not create the causes, conditions, methods, or karma of anger. As a disciple of the Buddha, he ought to be compassionate and filial, helping all sentient beings develop the good roots of non-contention. If instead, he insults and abuses sentient beings, or even transformation beings [such as deities and spirits], with harsh words, hitting them with his fists or feet, or attacking them with a knife or club -- or harbors grudges even when the victim confesses his mistakes and humbly seeks forgiveness in a soft, conciliatory voice -- the disciple commits a Parajika offense.",
    },
    {
      id: 10,
      pera: "A Buddha's disciple shall not himself speak ill of the Triple Jewel or encourage others to do so. He must not create the causes, conditions, methods or karma of slander. If a disciple hears but a single word of slander against the Buddha from externalists or evil beings, he experiences a pain similar to that of three hundred spears piercing his heart. How then could he possibly slander the Triple Jewel himself? Hence, if a disciple lacks faith and filial piety towards the Triple Jewel, and even assists evil persons or those of aberrant views to slander the Triple Jewel, he commits a Parajika offense.",
    },
  ];
  return (
    <div className="precepts">
      <div className="container">
        <div className="precpts_heading">
          <h2>Precepts</h2>
          <p>
            A few examples of parallel movements to the 10 precepts are: Not to
            engage in licentious acts or encourage others to do so. A monk is
            expected to abstain from sexual conduct entirely. Not to use false
            words and speech, or encourage others to do so. Not to trade or sell
            alcoholic beverages or encourage others to do so. Not to harbor
            anger or encourage others to be angry.
          </p>
        </div>
        <div className="row">
          {allPrecpts.map((precpt) => (
            <div key={precpt.id} className="col-md-4">
              <div className="single_precept">
                <img className="img-fluid" src={precept} alt="img" />
                <p>
                  {precpt.pera.length < 280
                    ? precpt.pera
                    : precpt.pera.slice(0, 280)}
                </p>
                <button>See More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Precepts;
